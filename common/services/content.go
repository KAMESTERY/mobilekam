package services

import (
	"context"
	contenu "github.com/KAMESTERY/middlewarekam/content"
	mutil "github.com/KAMESTERY/middlewarekam/utils"
	"mobile.kamestery.com/utils"
)

func Content(topic, title string) (data string) {
	identifier := mutil.ToNamespace(mutil.Namespace, topic, title)
	contentKamClient := contenu.NewContentKamClient()
	content, err := contentKamClient.One(context.Background(), identifier)
	if err != nil {
		return
	}
	data = utils.JsonString(content)
	return
}

func ListContentByTopic(topic string) (data string) {
	contentKamClient := contenu.NewContentKamClient()
	content, err := contentKamClient.Latest(context.Background(), topic, 0)
	if err != nil {
		return
	}
	data = utils.JsonString(content)
	return
}

func ListContentByTag(tag string) (data string) {
	contentKamClient := contenu.NewContentKamClient()
	var content_list []*contenu.Content

	for _, topic := range contenu.TOPICS {
		content, err := contentKamClient.ByTag(context.Background(), topic, 0, tag)
		if err != nil {
			// Handle this maybe?
		}
		content_list = append(content_list, content)
	}
	data = utils.JsonString(content_list)
	return
}
