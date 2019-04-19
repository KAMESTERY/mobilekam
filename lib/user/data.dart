import 'package:json_annotation/json_annotation.dart';

part 'data.g.dart';

/**
 * The authentication request message containing the user's credentials
 */
@JsonSerializable()
class UserCredentialsReq {
  String email;
  String password;

  UserCredentialsReq(this.email, this.password);

  factory UserCredentialsReq.fromJson(Map<String, dynamic> json) => _$UserCredentialsReqFromJson(json);

  Map<String, dynamic> toJson() => _$UserCredentialsReqToJson(this);
}

/**
 * The response message containing the user's authentication claims
 */
@JsonSerializable()
class AuthClaimsResp {
  String token;
  String user_id;
  String email;
  int role;

  AuthClaimsResp(this.token, this.user_id, this.email, this.role);

  factory AuthClaimsResp.fromJson(Map<String, dynamic> json) => _$AuthClaimsRespFromJson(json);

  Map<String, dynamic> toJson() => _$AuthClaimsRespToJson(this);
}

/**
 * The enrollment request message containing the user's details
 */
@JsonSerializable()
class UserEnrollReq {
  String username;
  String email;
  String password;

  UserEnrollReq(this.username, this.email, this.password);

  factory UserEnrollReq.fromJson(Map<String, dynamic> json) => _$UserEnrollReqFromJson(json);

  Map<String, dynamic> toJson() => _$UserEnrollReqToJson(this);
}

/**
 * The response containing the user's enrollment status
 */
@JsonSerializable()
class EnrollStatusResp {
  bool success;
  String message;

  EnrollStatusResp(this.success, this.message);

  factory EnrollStatusResp.fromJson(Map<String, dynamic> json) => _$EnrollStatusRespFromJson(json);

  Map<String, dynamic> toJson() => _$EnrollStatusRespToJson(this);
}
