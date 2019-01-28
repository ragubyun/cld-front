curl -X POST -H "Authorization: key=AAAAjugbh08:APA91bFTCX5amaZty5SMWOVQYOawfmj8xZVutXIpKUTiwScfKIuh1ya3HJcPIdQ867dyPX3nuPrT6F3AyitcbsVnqNIBtf3q2eaBU2BhUWImxEQqzrrure6jp28MebM1XlP519dHYkJZ" -H "Content-Type: application/json" -d '{
    "notification": {
        "title": "Help Call test",
        "body": "test test",
        "icon": "/img/sedan_side.png",
        "click_action": "http://localhost:8081"
	},
	"data": {
	    "subProcessName": "test sub",
        "detail": "test detail"
    },
    "to": "d2tV9mutzx0:APA91bFe8rayzOccp8Hw_A_q8KabJUyXEe-8bxaiey89-iFQbI5DXdz_iiE0S4iWbZuKSBFkNgkOGxvEClFMaRKCMf3-76UgpvDO_eGo7lQ5xGF3347vuSFYior2TB7qxcN_XL44xGFJ"
}' https://fcm.googleapis.com/fcm/send
