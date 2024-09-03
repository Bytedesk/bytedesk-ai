<!--
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-18 10:46:11
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-08-31 14:50:54
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  技术/商务联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
-->
# ci/cd 持续化部署

```bash
# - 打包上传到服务器，需要手动输入服务器密码(配置密钥对之后，不需要输入密码)：
# 排除embeddings文件夹
sh cicd/scripts/release.sh
# 上传所有
sh cicd/scripts/release-all.sh
```
