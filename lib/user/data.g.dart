// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'data.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

UserCredentialsReq _$UserCredentialsReqFromJson(Map<String, dynamic> json) {
  return UserCredentialsReq(
      json['email'] as String, json['password'] as String);
}

Map<String, dynamic> _$UserCredentialsReqToJson(UserCredentialsReq instance) =>
    <String, dynamic>{'email': instance.email, 'password': instance.password};

AuthClaimsResp _$AuthClaimsRespFromJson(Map<String, dynamic> json) {
  return AuthClaimsResp(json['token'] as String, json['user_id'] as String,
      json['email'] as String, json['role'] as int);
}

Map<String, dynamic> _$AuthClaimsRespToJson(AuthClaimsResp instance) =>
    <String, dynamic>{
      'token': instance.token,
      'user_id': instance.user_id,
      'email': instance.email,
      'role': instance.role
    };

UserEnrollReq _$UserEnrollReqFromJson(Map<String, dynamic> json) {
  return UserEnrollReq(json['username'] as String, json['email'] as String,
      json['password'] as String);
}

Map<String, dynamic> _$UserEnrollReqToJson(UserEnrollReq instance) =>
    <String, dynamic>{
      'username': instance.username,
      'email': instance.email,
      'password': instance.password
    };

EnrollStatusResp _$EnrollStatusRespFromJson(Map<String, dynamic> json) {
  return EnrollStatusResp(json['success'] as bool, json['message'] as String);
}

Map<String, dynamic> _$EnrollStatusRespToJson(EnrollStatusResp instance) =>
    <String, dynamic>{'success': instance.success, 'message': instance.message};
