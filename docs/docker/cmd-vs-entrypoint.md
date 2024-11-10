---
title: "CMD vs ENTRYPOINT"
last_update: 
    date: 20241110
pagination_next: null
---

## 前言

在 Dockerfile 中，有一些指令非常相似，像是 `CMD` 跟 `ENTRYPOINT` 等等

這篇會探討在 Dockerfile 中的 `CMD` 跟 `ENTRYPOINT` 到底有什麼不一樣

## CMD

剛入門的時候可能就會認為 `CMD` 就是容器啟動時的命令  
下面介紹 `ENTRYPOINT` 時會再說明他與 `CMD` 的關係  

一個 stage 只會有一個 `CMD`   
寫很多個 `CMD` 只有最後一個會生效    
如果不知道 stage 是什麼的話就是每個 `FROM` 開始都是一個 stage

### 語法

通常(後面會講到其他情況) 第一個都會是一個 executable  
後面接著他的參數 

可以把牠們都放在 list 裡面  
或是直接用空格隔開  
官方建議是放在 list 裡面  
注意這邊不能使用單引號 ' 包起來，原因下面會說明   

```Docker
FROM alpine
CMD ["echo", "hello"]
# or CMD echo hello
```

但是若在啟動 container 時額外提供了一個 executable 就會直接覆蓋掉 `CMD` 的內容

```bash
$ docker build -t test .
$ docker run test ls # 啟動容器後執行的命令變成ls
```

## ENTRYPOINT

`ENTRYPOINT` 語法與 `CMD` 一模一樣

容器啟動的時候其實真正的命令是 `ENTRYPOINT 'CMD'`  
預設的 entrypoint 是 `sh -c`  
這也是為什麼你不能在 CMD 中使用 '，因為他已經在 '' 裡面了  
那我們已經有 `CMD` 了為什麼還需要 `ENTRYPOINT` 呢？  
cmd 其實比較像提供給 entrypoint 的參數  
而這個參數也可以在容器啟動時改由用戶提供  
我們可以看下面的例子  
照理來說容器只會輸出 hello  
但是我在最後提供了一個 cmd，內容是 ls  
因此最後的輸出是 hello ls
```docker
FROM alpine 
ENTRYPOINT ["echo", "hello"]
```

```bash
$ docker build -t test .
$ docker run test ls
hello ls
$ 
```

所以 `ENTRYPOINT` 適合放置一些必須要執行的script  
舉例來說 PostgreSQL 的 [Dockerfile](https://github.com/docker-library/postgres/blob/ee530cc079f232f9b1045db43d8c501ee2057d6d/16/bookworm/Dockerfile#L186) 設定了 `ENTRYPOINT ["docker-entrypoint.sh"]`  
在那個 shell script 中會生成 postgres 必須的文件以及設定一些權限  
若是這個 shell script 沒有執行可能會導致一些問題  
因此使用 ENTRYPOINT 讓他無法被用戶提供的 `CMD` 覆蓋  
當然用戶真的想要的話也能透過 `--entrypoint` 來覆寫


