import requests
import time

for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test")
    print(response.status_code)
    time.sleep(6)

# Timeout
try:
    response2 = requests.get("http://httpbin.org/delay/5", timeout=2)
# except requests.Timeout: OU
except requests.ReadTimeout:
    response2 = requests.get("http://httpbin.org/delay/5", timeout=8)
finally:
    print(response2.status_code)
