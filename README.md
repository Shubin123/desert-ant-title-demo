# Title web demo

[Open the demo](https://shubin123.github.io/desert-ant-title-demo/)

Powered by [Desert Ant Labs](https://desertant.com) 🐜. The original Title model and weights are by Desert Ant Labs B.V. This independent demo is maintained by Shubin123. See [ATTRIBUTION.md](ATTRIBUTION.md) and the [Source-Available License](https://license.desertant.com/1.0).

Title's released artifact uses Apple MLX. The GitHub Pages site is the web interface; generation runs through a local engine on your Apple Silicon Mac. This is not browser-only inference or the official Title SDK.

## Run the local engine

Requirements: Apple Silicon Mac, macOS 15+, Python 3.11+, network for the first model download (about 294 MB).

```sh
git clone https://github.com/Shubin123/desert-ant-title-demo.git
cd desert-ant-title-demo
python3 -m venv .venv
.venv/bin/pip install -r engine/requirements.txt
.venv/bin/python engine/server.py
```

When the engine is ready, open the Pages demo and paste the pairing token printed in your terminal. Allow local-network access if your browser asks. If your browser blocks the connection, open http://127.0.0.1:8768/ instead; the engine serves the same UI locally. Stop the engine with Ctrl-C.

Your passage is sent only to the engine at 127.0.0.1 on your own machine, never to a cloud inference service. Requests require a pairing token, the server binds only to loopback, and text and results are not logged. The original v0.1.0 model downloads from Hugging Face and stays cached on your Mac.

## Model behavior

The app uses the original fine-tuned, 6-bit MLX weights, the upstream passage prompt and TITLE/DESC parser, and greedy decoding capped at 96 tokens. Review factual details before using generated text.

## Deployment and icons

GitHub Actions publishes the site directory to GitHub Pages on pushes to main. The canonical 64×64 SVG from Shubin123/portfolio is used as both favicon and header mark. The Python engine remains local; it is not deployed to GitHub Pages.

- [Original SDK](https://github.com/Desert-Ant-Labs/desert-ant-core/blob/main/docs/models/title.md)
- [Original model](https://huggingface.co/desert-ant-labs/title)
