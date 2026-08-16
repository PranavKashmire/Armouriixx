import re
import urllib.request

urls = [
    "https://pin.it/6sW7NernC",
    "https://pin.it/1GvUer4Lj",
    "https://pin.it/2BnVNcMk3",
]

for u in urls:
    req = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0"})
    resp = urllib.request.urlopen(req, timeout=30)
    html = resp.read().decode("utf-8", "replace")
    final_url = resp.url
    imgs = re.findall(r"https://i\.pinimg\.com/736x/[a-f0-9/]+\.jpg", html)
    imgs = list(dict.fromkeys(imgs))
    print(u)
    print("  final:", final_url)
    print("  pinimg:", imgs[:3] if imgs else "NOT FOUND")
    print()
