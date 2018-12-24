---
title: iTerm2にフルディスクアクセス権限を付与する
cover:
categories: ['tech']
---

Homebrewで[Carthage](https://github.com/Carthage/Carthage#installing-carthage)を入れようとしたら、以下のような`Permission denied`エラーが発生した。Mojaveからファイルアクセス権限が厳しくなり、手動で権限をつけてあげる必要がある。

```bash
Error: An unexpected error occurred during the `brew link` step
The formula built, but is not symlinked into /usr/local
Permission denied @ dir_s_mkdir - /usr/local/Frameworks
Error: Permission denied @ dir_s_mkdir - /usr/local/Frameworks
```

## 環境

```yaml
macOS: 10.14.2(Mojave)
iTerm: 3.2
```

## フルディスクアクセス権限をつける

[Fulldiskaccess · Wiki · George Nachman / iterm2 · GitLab](https://gitlab.com/gnachman/iterm2/wikis/Fulldiskaccess)にも書かれている通り、

1. システム環境設定を開く
2. セキュリティとプライバシーに移動
3. フルディスクアクセスにiTermを追加

3stepでdone。
