---
title: SFTP by Docker
description: จำลอง SFTP server ด้วย docker-compose
slug: 2023-04-30_Docker-SFTP
category: Tips
tags: [Docker, SFTP]
img: blog-1.jpg
---

# จำลอง SFTP server ด้วย docker-compose

เมื่อต้องพัฒนาโปรแกรมที่ต้องเชื่อมต่อกับ sftp แต่ยังไม่ได้ server sftp ตัวจริงมาทำการทดสอบ จึงต้องทำการจำลอง server sftp ที่เครื่องตัวเองก่อน วิธีง่ายๆคือการใช้ docker

### ขั้นตอนดังนี้

1. ทำการ clone repo

```bash
git clone git@github.com:PinpongTp/sftp-docker.git
```

1. run docker-compose file

```bash
docker-compose -up -d
```

1. login sftp ได้โดยใช้ username ‘demo’ password ‘demo’ หรือ config ที่ file config.sftp.json

```json
{
  "Global": {
    "Chroot": {
      "Directory": "%h",
      "StartPath": "sftp"
    },
    "Directories": ["sftp"]
  },
  "Users": [
    {
      "Username": "demo",
      "Password": "demo"
    }
  ]
}
```

\_ref: [PinpongTp/sftp-docker](https://github.com/PinpongTp/sftp-docker)

\_ref: [emberstack/docker-sftp](https://github.com/emberstack/docker-sftp)

---

_Pinpong_ _Tongpat_
_2023-02-11_
