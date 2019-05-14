package services

import (
	"context"
	"github.com/KAMESTERY/middlewarekam/auth"
)

func Enroll(username, email, password, confirmPassword string) (ok bool) {
	authClient := auth.NewAuthKamClient()
	user_enroll_req := auth.UserEnrollReq{
		username,
		email,
		password,
	}
	enroll_status_resp, _ := authClient.Enroll(context.Background(), &user_enroll_req)
	ok = enroll_status_resp.Success
	return
}

func Authenticate(email, password string) (token string) {
	authClient := auth.NewAuthKamClient()
	user_creds_req := auth.UserCredentialsReq{
		email,
		password,
	}
	auth_claims_resp, _ := authClient.Authenticate(context.Background(), &user_creds_req)
	token = auth_claims_resp.Token
	return
}
