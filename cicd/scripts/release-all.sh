#!/usr/bin/bash
###
 # @Author: jackning 270580156@qq.com
 # @Date: 2024-06-18 10:48:16
 # @LastEditors: jackning 270580156@qq.com
 # @LastEditTime: 2024-08-31 14:49:53
 # @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 #   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 #  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 #  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 #  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 #  contact: 270580156@qq.com 
 #  技术/商务联系：270580156@qq.com
 # Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
### 
#!/usr/bin/bash
# 首次上传所有
# 本地路径（这里添加了多个文件和文件夹）
FILES_TO_UPLOAD=("app" "cicd" "embeddings" "static" "main.py" ".env.prod" "poetry.lock" "pyproject.toml" "readme.md" "readme.zh.md" "readme-ubuntu.md" "start.sh" "stop.sh")
# 服务器地址
SERVER_HOST=121.199.165.116
# 服务器路径，需要事先创建
TARGET_DIST=/weiyuai/ai_server/

# 打包完，上传到服务器（使用循环来上传所有文件和文件夹）
for FILE in "${FILES_TO_UPLOAD[@]}"; do
    if [ -d "./$FILE" ]; then
        # 如果是文件夹，使用-r选项递归复制
        scp -r "./$FILE" "root@$SERVER_HOST:$TARGET_DIST"
    elif [ -f "./$FILE" ]; then
        # 检查文件扩展名，如果不是.pyc则添加到列表
        if [[ ! $FILE == *.pyc ]]; then
             # 如果是文件，直接复制
            scp "./$FILE" "root@$SERVER_HOST:$TARGET_DIST"
        fi
    else
        echo "Warning: '$FILE' does not exist or is not a file/directory."
    fi
done
