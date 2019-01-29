FROM gitpod/workspace-full-vnc

USER root

# Install Prerequisites and Dart
RUN curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list && \
    apt-get update && \
    apt-get -y install  build-essential dart libkrb5-dev gcc make && \
    apt-get clean && \
    apt-get -y autoremove && \
    apt-get -y clean && \
    rm -rf /var/lib/apt/lists/*

USER gitpod

# Install Flutter
RUN cd /home/gitpod && wget -O flutter_sdk.tar.xz https://storage.googleapis.com/flutter_infra/releases/stable/linux/flutter_linux_v1.0.0-stable.tar.xz \
    && tar -xvf flutter_sdk.tar.xz && rm flutter_sdk.tar.xz;

# Install Android SDK
ARG ANDROID_SDK_VERSION=4333796
RUN mkdir -p /home/gitpod/android-sdk && cd /home/gitpod/android-sdk && \
    wget -q https://dl.google.com/android/repository/sdk-tools-linux-${ANDROID_SDK_VERSION}.zip && \
    unzip *tools*linux*.zip && \
    rm *tools*linux*.zip

# Adjust Path
ENV ANDROID_HOME /home/gitpod/android-sdk
ENV FLUTTER_HOME /home/gitpod/flutter
ENV PATH=/usr/lib/dart/bin:$FLUTTER_HOME/bin:$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools/bin:$PATH

# accept the license agreements of the SDK components
ADD license_accepter.sh /home/gitpod/
RUN /home/gitpod/license_accepter.sh $ANDROID_HOME

# Install Android Build Tool and Libraries
RUN $ANDROID_HOME/tools/bin/sdkmanager --update
RUN $ANDROID_HOME/tools/bin/sdkmanager "build-tools;${ANDROID_BUILD_TOOLS_VERSION}" \
    "platforms;android-${ANDROID_SDK_VERSION}" \
    "platform-tools"

# setup adb server
EXPOSE 5037
