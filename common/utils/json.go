package utils

import (
	"encoding/json"
)

func JsonString(data interface{}) (jsonStr string) {
	b, err := json.Marshal(data)
	if err != nil {
		return
	}
	jsonStr = string(b)
	return
}
