import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:mobilekam/user/data.dart';

Future<AuthClaimsResp> authenticate(UserCredentialsReq userCredentialsReq) async {
  final response = await http.post("/user/authenticate", body: userCredentialsReq);
  AuthClaimsResp authClaimsResp = response.statusCode == 200 ?
  AuthClaimsResp.fromJson(json.decode(response.body)) :
  throw Exception('Failed to authenticate');
  return authClaimsResp;
}

Future<EnrollStatusResp> enroll(UserEnrollReq userEnrollReq) async {
  final response = await http.post("/user/enroll", body: userEnrollReq);
  EnrollStatusResp enrollStatusResp = response.statusCode == 200 ?
  EnrollStatusResp.fromJson(json.decode(response.body)) :
  throw Exception('Failed to enroll');
  return enrollStatusResp;
}
