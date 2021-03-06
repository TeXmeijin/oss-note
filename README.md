# OSS-note

GitHubリポジトリを見ながら、ファイルごとに自分用のコメントを付けていけるようなツールを考案している。

ローカルで動作するツールをイメージしているため、[zenn-editor](https://github.com/zenn-dev/zenn-editor/)を参考に実装中。

---

## 考察

実際にコードリーディングする際には、ソースコードを順に読んでいく際に定義元へのジャンプ機能など、基礎的なエディタについている機能は必須と言える。

そのため、本ツールでソースコード自体を読む機能を実装してくのはかなり無謀な挑戦になると考えられる（VSCode等の諸機能がいい感じにOSS化されていたら話は変わるが）。

実際にコードを読みながらコメントを付けていくのはVSCodeでやるが、それをサマライズして振り返りやすくViewにしてくれる機能をツールとして作成するのがいいのかもしれない。

たとえば、後で調べるといったコメントや、ここが特に勉強になったのであとでブログ等に投稿したいといったコメントをまとめて見れる専用のView機能をイメージしている。

ここに関しては、まず開発者である自分自身が、徹底的にVSCode等でコードリーディングを繰り返し、最終的に課題に感じた部分をツール化するのが良さそう。
