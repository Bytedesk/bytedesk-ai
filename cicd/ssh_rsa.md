<!--
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-08-08 07:10:12
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-08-29 12:36:07
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
-->
# scp上传文件到服务器免输入密码

## 1. 生成密钥对

```bash
ssh-keygen -t rsa
# /Users/ningjinpeng/.ssh/python_id_rsa
```

(.venv) (base) ningjinpeng@192 bytedesk-ai-private % ssh-keygen -t rsa
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/ningjinpeng/.ssh/id_rsa): /Users/ningjinpeng/.ssh/python_id_rsa
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /Users/ningjinpeng/.ssh/python_id_rsa
Your public key has been saved in /Users/ningjinpeng/.ssh/python_id_rsa.pub
The key fingerprint is:
SHA256:DTnkMLCW7ZLvRkPK8bxWBl4MXcRJbNx6+TD6AHvw/2A <ningjinpeng@ningjinpengdeMacBook-Pro.local>
The key's randomart image is:
+---[RSA 3072]----+
|    ..o..B+o     |
|     +.=..*.    |
|    + .o=. . .   |
|   ..oo =+. =    |
|   .oB.oS=.o +   |
|    oo* + =   .  |
|     ..= . +E    |
|     .+    .o.   |
|     o.      ..  |
+----[SHA256]-----+

## 2. 复制公钥到服务器

```bash
ssh-copy-id root@121.199.165.116
```

## 3. 修改权限

```bash
# 服务器端执行
chmod 700 ~/.ssh
chmod 644 ~/.ssh/authorized_keys
# 本地端执行
chmod 600 ~/.ssh/python_id_rsa
```
