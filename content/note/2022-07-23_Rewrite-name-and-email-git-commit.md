---
title: วิธีเปลี่ยน user.name และ user.email ของ commit เก่าใน git
description: วิธีเปลี่ยน user.name และ user.email ของ commit เก่าใน git
slug: 2022-07-23_Rewrite-name-and-email-git-commit
category: Tips
tags: [Git]
img: blog-1.jpg
---

# วิธีเปลี่ยน user.name และ user.email ของ commit เก่าใน git

เนื่องจากผมเจอเหตุการ history ใน github ไม่ขึ้นทั้งๆที่ผมก็ push ขึ้นไปทุกวัน เลยไปเจอว่า ใน github จะขึ้น history ก็ต่อเมื่อ commit นั้นแก้ไขโดยเราเอง (หมายถึง email ต้องตรงกัน) แล้วผมดัน config email ใน git config ไม่ตรงกับ account ของ github ก็เลยต้องไปหาวิธีการแก้ไข commit เก่าๆ ได้วิธีการดังนี้ ใครที่ต้องการแก้ไข git commit ก็ทำตามได้เลย

### เริ่มกันเลย

ทำการสร้างคำสั่งก่อนเพื่อให้เรียกใช้ง่ายๆ

```
git config --global alias.change-commits '!'"f() { VAR=\$1; OLD=\$2; NEW=\$3; shift 3; git filter-branch --env-filter \"if [[ \\\"\$\`echo \$VAR\`\\\" = '\$OLD' ]]; then export \$VAR='\$NEW'; fi\" \$@; }; f"
```

แก้ไข user.name ตามนี้ได้เลย

```
git change-commits GIT_AUTHOR_NAME "old name" "new name"
```

หากจะแก้ไข้ email ก็เปลี่ยนเป็นแบบนี้

```
git change-commits GIT_AUTHOR_EMAIL "old email" "new email"
```

ถ้าต้องการแก้ไข 10 commit ล่าสุดให้ใช้แบบนี้ (ไม่ค่อยได้ใช้หรอกแต่เผื่อต้องใช้)

```
git change-commits GIT_AUTHOR_EMAIL "old@email.com" "new@email.com" HEAD~10..HEAD
```

เมื่อแก้ไขแล้วทำการ push -f เพื่อ push commit เข้าไปที่ github

_ref: https://stackoverflow.com/a/11768843/17324910_

---

_Pinpong_ _Tongpat_
_2022-07-23_
