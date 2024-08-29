<!--
 * @Author: jack ning github@bytedesk.com
 * @Date: 2023-12-06 14:32:30
 * @LastEditors: jack ning github@bytedesk.com
 * @LastEditTime: 2024-08-29 08:09:49
 * @FilePath: /bytedesk-ai/backend/README_CN.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 说明

```bash
# 安装 python 3.11.4
pyenv install 3.11.4
pyenv global 3.11.4
# 
cd backend
python -m venv venv
pip install -r requirements.txt
# REDIS_URL = "redis://:%s@%s:%s/%s"%(REDIS_PASSWORD,REDIS_HOST,REDIS_PORT,REDIS_DB)
export REDIS_URL=redis://:C8aJEVCCvSA1VFi8@127.0.0.1:6379/3
# 安装 redissearch

# openai
export OPENAI_API_KEY="sk-..."
# langsmith
export LANGCHAIN_TRACING_V2="true"
export LANGCHAIN_API_KEY=...
# 
export YDC_API_KEY=...
export TAVILY_API_KEY=...
# 启动后台
langchain serve --port=8100
```
