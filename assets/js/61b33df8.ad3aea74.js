"use strict";(self.webpackChunkcclog=self.webpackChunkcclog||[]).push([[850],{9290:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"cryptography/ssl","title":"\u7406\u89e3 TLS/SSL","description":"\u5b89\u5168\u9023\u7dda\u662f\u600e\u9ebc\u5efa\u7acb\u7684\uff1f","source":"@site/docs/cryptography/ssl.md","sourceDirName":"cryptography","slug":"/cryptography/ssl","permalink":"/cclog/docs/cryptography/ssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u7406\u89e3 TLS/SSL","description":"\u5b89\u5168\u9023\u7dda\u662f\u600e\u9ebc\u5efa\u7acb\u7684\uff1f"},"sidebar":"tutorialSidebar","previous":{"title":"\u7406\u89e3 RSA","permalink":"/cclog/docs/cryptography/rsa"},"next":{"title":"Docker","permalink":"/cclog/docs/category/docker"}}');var i=s(4848),t=s(8453);const c={title:"\u7406\u89e3 TLS/SSL",description:"\u5b89\u5168\u9023\u7dda\u662f\u600e\u9ebc\u5efa\u7acb\u7684\uff1f"},l=void 0,o={},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6d41\u7a0b",id:"\u6d41\u7a0b",level:2},{value:"\u5be6\u5730\u8003\u5bdf",id:"\u5be6\u5730\u8003\u5bdf",level:2}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,i.jsxs)(n.p,{children:["\u6bcf\u6b21\u700f\u89bd\u7db2\u9801\u6642",(0,i.jsx)(n.br,{}),"\n","\u5fc3\u88e1\u5176\u5be6\u90fd\u6709\u9ede\u597d\u5947",(0,i.jsx)(n.br,{}),"\n","\u6211\u5011\u7684\u5b89\u5168\u9023\u7dda\u5230\u5e95\u662f\u5982\u4f55\u5efa\u7acb\u7684",(0,i.jsx)(n.br,{}),"\n","\u5148\u7c21\u55ae\u4ecb\u7d39\u4e00\u4e0b ssl/tls \u662f\u4ec0\u9ebc",(0,i.jsx)(n.br,{}),"\n","netscape \u5728 1994 \u5e74\u8a2d\u8a08\u4e86\u4e00\u6b3e\u4e3b\u8981\u7528\u65bc web \u7684\u5b89\u5168\u5354\u5b9a\u7a31\u70ba ssl (secure socket layer)",(0,i.jsx)(n.br,{}),"\n","\u7528\u4f86\u52a0\u5bc6\u81ea\u8eab\u7684 HTTPS",(0,i.jsx)(n.br,{}),"\n","\u5f8c\u4f86\u6a19\u6e96\u5316\u5f8c\u7a31\u70ba tls (transport layer security)",(0,i.jsx)(n.br,{}),"\n","\u90a3\u4ed6\u5011\u7684\u5de5\u4f5c\u975e\u5e38\u8f9b\u82e6",(0,i.jsx)(n.br,{}),"\n","\u8981\u5728\u4e0d\u5b89\u5168\u7684\u74b0\u5883\u4e0b\u5354\u8b70\u51fa\u4e00\u628a\u5c0d\u7a31\u7684\u5bc6\u9470\u4f86\u52a0\u5bc6",(0,i.jsx)(n.br,{}),"\n","\u4ee5\u4fdd\u8b49\u4e4b\u9593\u7684\u5c0d\u8a71\u4e0d\u6703\u88ab\u7aca\u807d\u751a\u81f3\u7ac4\u6539"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u958b\u59cb\u9019\u8d9f\u65c5\u7a0b\u4e4b\u524d\u5efa\u8b70\u77e5\u9053\u4ee5\u4e0b"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Diffie-Hellman"}),"\n",(0,i.jsx)(n.li,{children:"\u6578\u4f4d\u7c3d\u7ae0\u8207\u8b49\u66f8"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u90a3\u6211\u5011\u4ee5\u4e0b\u8aaa\u660e\u7684\u6d41\u7a0b\u662f tls 1.2 \u7684 Diffie-Hellman \u7248\u672c",(0,i.jsx)(n.br,{}),"\n","\u56e0\u70ba RSA \u7248\u672c\u5df2\u7d93\u5728 tls 1.3 \u7248\u672c\u88ab\u68c4\u7528",(0,i.jsx)(n.br,{}),"\n","\u90a3\u5c31\u8b93\u6211\u5011\u958b\u59cb\u5427\uff01"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6d41\u7a0b",children:"\u6d41\u7a0b"}),"\n",(0,i.jsx)(n.p,{children:"\u5177\u9ad4\u6b65\u9a5f\u5982\u4e0b"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u54c8\u56c9\u4f60\u597d\u55ce"}),(0,i.jsx)(n.br,{}),"\n","\u4e00\u5207\u90fd\u8d77\u6e90\u65bc Client \u7684\u4e00\u53e5\u554f\u5019\uff0c\u5728\u554f\u5019\u7684\u6642\u5019\u6703\u9806\u4fbf\u9644\u4e0a\u4ee5\u4e0b"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Client \u4e0a\u7684 tls/ssl \u652f\u63f4\u7684\u6f14\u7b97\u6cd5\u7b49\u7b49",(0,i.jsx)(n.br,{}),"\n","\u56e0\u70ba\u5927\u5bb6\u7684\u7248\u672c\u4e0d\u4e00\u5b9a\u76f8\u540c",(0,i.jsx)(n.br,{}),"\n","\u6240\u4ee5\u8981\u5354\u5546\u5177\u9ad4\u4f7f\u7528\u7684\u6f14\u7b97\u6cd5\uff0c\u5982\u4f55\u96dc\u6e4a\u52a0\u89e3\u5bc6\u7b49\u7b49"]}),"\n",(0,i.jsxs)(n.li,{children:["Client \u96a8\u6a5f\u6578",(0,i.jsx)(n.br,{}),"\n","\u5728\u5f8c\u9762\u6703\u7528\u5230\uff0c\u53ef\u4ee5\u7528\u4f86\u62b5\u79a6\u91cd\u653e\u653b\u64ca",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:s(8154).A+"",width:"563",height:"326"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"I'm fine, thank you."}),(0,i.jsx)(n.br,{}),"\n","Server \u807d\u5230\u4e86 Client \u7684 Hi\uff0c\u4e5f\u56de\u61c9\u4e86 Hi\uff0c\u5176\u4e2d\u5305\u542b\u4ee5\u4e0b"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Server \u6c7a\u5b9a\u4f7f\u7528\u7684\u6f14\u7b97\u6cd5"}),"\n",(0,i.jsx)(n.li,{children:"Server \u96a8\u6a5f\u6578\uff0c\u5f8c\u9762\u6703\u7528\u5230"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"I am me."}),(0,i.jsx)(n.br,{}),"\n","Server \u5728\u9019\u6642\u5c07\u81ea\u5df1\u7684\u6191\u8b49\u50b3\u7d66 Client",(0,i.jsx)(n.br,{}),"\n","\u8b49\u660e\u81ea\u5df1\u5c31\u662f Server\uff0c\u5728\u8b49\u66f8\u4e2d\u6709\u81ea\u5df1\u7684\u516c\u9470"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(6465).A+"",width:"615",height:"675"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Diffie-Hellman!"}),(0,i.jsx)(n.br,{}),"\n","Client \u5728\u6aa2\u67e5\u5b8c\u6191\u8b49\u5f8c\u78ba\u8a8d\u5c31\u662f\u9019\u500b\u4eba",(0,i.jsx)(n.br,{}),"\n","\u5f9e\u9019\u6b65\u958b\u59cb\u5c31\u53ef\u4ee5\u52a0\u5bc6\u4e86",(0,i.jsx)(n.br,{}),"\n","\u56e0\u70ba\u6240\u6709\u8a0a\u606f\u90fd\u80fd\u900f\u904e Server \u516c\u9470\u52a0\u5bc6",(0,i.jsx)(n.br,{}),"\n","\u4f46\u662f\u4f7f\u7528 RSA \u9019\u985e\u975e\u5c0d\u7a31\u52a0\u5bc6\u7684\u6548\u80fd\u4e0d\u597d",(0,i.jsx)(n.br,{}),"\n","\u6240\u4ee5\u9700\u8981\u53e6\u5916\u4e00\u628a key \u7576\u6210\u5c0d\u7a31\u5bc6\u78bc (\u5169\u908a\u4f7f\u7528\u7684\u5bc6\u78bc\u4e00\u6a23)",(0,i.jsx)(n.br,{}),"\n","\u4fbf\u5c07 Diffie-Hellman \u7684\u53c3\u6578\u900f\u904e Server \u7684\u516c\u9470\u52a0\u5bc6\u50b3\u905e",(0,i.jsx)(n.br,{}),"\n","\u800c\u6211\u5011\u6700\u5f8c\u60f3\u8981\u7684\u9019\u628a\u5c0d\u7a31\u5bc6\u78bc\u7a31\u70ba",(0,i.jsx)(n.strong,{children:"\u4e3b\u5bc6\u78bc Master Key"}),(0,i.jsx)(n.br,{}),"\n","\u8ca0\u8cac\u9019\u6b21\u5c0d\u8a71\u5f8c\u7e8c\u7684\u6240\u6709\u52a0\u89e3\u5bc6"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f46\u6211\u5011\u5be6\u969b\u4e0a Diffie-Hellman \u7522\u751f\u7684\u5171\u7528\u5bc6\u78bc\u7a31\u70ba",(0,i.jsx)(n.strong,{children:"\u9810\u5099\u4e3b\u5bc6\u78bc ( Pre Master Key )"}),(0,i.jsx)(n.br,{}),"\n","\u800c\u4e0d\u662f\u6700\u5f8c\u7684\u4e3b\u5bc6\u78bc",(0,i.jsx)(n.br,{}),"\n","\u9019\u662f\u70ba\u4e86\u8b93\u4e0d\u540c\u7684\u6f14\u7b97\u6cd5\u6709\u4e00\u500b\u4e00\u81f4\u6027",(0,i.jsx)(n.br,{}),"\n","\u6700\u5f8c\u6703\u6709\u5716\u7247\u4f86\u89e3\u91cb\u6240\u6709\u5bc6\u78bc\u7684\u7522\u751f"]}),"\n",(0,i.jsx)(n.admonition,{title:"\u52d5\u52d5\u8166",type:"tip",children:(0,i.jsxs)(n.p,{children:["\u770b\u5230\u9019\u908a\u4f60\u53ef\u80fd\u6703\u6709\u4e00\u500b\u7591\u554f",(0,i.jsx)(n.br,{}),"\n","\u70ba\u4ec0\u9ebc\u4e0d\u5c07 Pre Master Key \u76f4\u63a5\u900f\u904e\u516c\u9470\u52a0\u5bc6\u50b3\u9001\u7d66 Server",(0,i.jsx)(n.br,{}),"\n","\u800c\u662f\u5728\u900f\u904e\u4e00\u5c64 Diffie-Hellman \u5bc6\u9470\u4ea4\u63db",(0,i.jsx)(n.br,{}),"\n","\u4e8b\u5be6\u4e0a\u9019\u5927\u81f4\u5c31\u662f\u88ab\u68c4\u7528\u7684 RSA \u65b9\u6cd5\u505a\u7684\u4e8b\u60c5\uff0c\u90a3\u70ba\u4ec0\u9ebc\u5462\uff1f"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(6520).A+"",width:"691",height:"829"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Almost Done..."}),(0,i.jsx)(n.br,{}),"\n","\u900f\u904e Diffie Hellman \u7684\u6b65\u9a5f",(0,i.jsx)(n.br,{}),"\n","Client \u8ddf Server \u53ef\u4ee5\u5171\u540c\u7b97\u51fa Pre Master Secret",(0,i.jsx)(n.br,{}),"\n","\u6700\u5f8c\u4e00\u6b65\u5247\u662f\u8a08\u7b97\u51fa Master Secret",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc5246#section-8.1",children:"RFC"})," \u5728\u9019\u6b65\u6709\u8aaa\u660e\u6240\u6709\u6f14\u7b97\u6cd5\u6700\u5f8c\u7684\u8a08\u7b97\u65b9\u5f0f\u662f\u4e00\u81f4\u7684",(0,i.jsx)(n.br,{}),"\n","\u4e5f\u5c31\u662f\u628a\u5169\u500b\u96a8\u6a5f\u6578\u4ee5\u53ca Pre Master Secret \u4e1f\u5165\u507d\u96a8\u6a5f\u5668",(0,i.jsx)(n.br,{}),"\n","\u4e26\u53d6\u524d 48 Bytes\uff0c\u4e0b\u9762\u9019\u5f35\u5716\u662f\u63cf\u8ff0\u5bc6\u78bc\u7684\u95dc\u4fc2\u5716",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:s(1575).A+"",width:"1232",height:"1590"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Finished, cheers!"}),(0,i.jsx)(n.br,{}),"\n","\u96d9\u65b9\u5f97\u5230\u4e86 Master Key \u5f8c\uff0c\u5c31\u4f7f\u7528\u5b83\u52a0\u5bc6 Finished \u8a0a\u606f\u50b3\u9001\u7d66\u5c0d\u65b9",(0,i.jsx)(n.br,{}),"\n","\u800c\u9019\u500b Finished \u8a0a\u606f\u5305\u542b\u4e86\u524d\u9762\u6240\u6709\u8a0a\u606f\u7684\u96dc\u6e4a (HMAC)",(0,i.jsx)(n.br,{}),"\n","\u5982\u679c\u96d9\u65b9\u6536\u5230\u5f8c\u9a57\u7b97\u767c\u73fe\u4e0d\u5c0d",(0,i.jsx)(n.br,{}),"\n","\u5c31\u53ef\u4ee5\u5927\u558a\u4e00\u8072\uff1a\u300c\u6709\u5167\u9b3c\uff01\u7d42\u6b62\u4ea4\u6613\uff01\u300d"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5be6\u5730\u8003\u5bdf",children:"\u5be6\u5730\u8003\u5bdf"}),"\n",(0,i.jsxs)(n.p,{children:["\u8b1b\u4e86\u9019\u9ebc\u591a\uff0c\u597d\u7d2f",(0,i.jsx)(n.br,{}),"\n","\u4f46\u6c92\u6709\u5be6\u5730\u8003\u5bdf\u600e\u9ebc\u53ef\u4ee5\u5462\uff01\n\u6211\u5011\u4e00\u6a23\u662f\u4f7f\u7528 tls1.2 \u4f86\u5be6\u5730\u8003\u5bdf",(0,i.jsx)(n.br,{}),"\n","\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u5c31\u53ef\u4ee5\u89c0\u5bdf\u8ddf Google.com \u5efa\u7acb\u5b89\u5168\u9023\u7dda\u7684\u904e\u7a0b\uff01"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"openssl s_client -connect google.com:443 -state -tls1_\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5c31\u662f\u8f38\u51fa\n\u4ed4\u7d30\u89c0\u5bdf\u53ef\u4ee5\u770b\u5230\u4e00\u958b\u59cb\u7684 client hello \u4ee5\u53ca server hello",(0,i.jsx)(n.br,{}),"\n","\u63a5\u4e0b\u4f86\u5c31\u662f Google \u7684\u8b49\u66f8\u4ee5\u53ca Diffie-Hellman \u7684 key exchange",(0,i.jsx)(n.br,{}),"\n","\u6700\u5f8c read finished \u6aa2\u67e5\u7121\u8aa4\uff01",(0,i.jsx)(n.br,{}),"\n","cipher \u7684\u90e8\u5206\u4e5f\u80fd\u770b\u5230 ECDHE",(0,i.jsx)(n.br,{}),"\n","\u4e5f\u5c31\u662f\u4f7f\u7528\u6a62\u5713\u66f2\u7dda\u7684 Diffie-Hellman Exchange",(0,i.jsx)(n.br,{}),"\n","\u90a3\u6211\u5011\u4eca\u5929\u5c31\u5230\u9019\u908a\u4e86!",(0,i.jsx)(n.br,{}),"\n","\u660e\u5929\u9084\u8981\u4e0a\u73ed = ="]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"Connecting to 172.217.163.46\nCONNECTED(00000005)\nSSL_connect:before SSL initialization\nSSL_connect:SSLv3/TLS write client hello\nSSL_connect:SSLv3/TLS write client hello\nSSL_connect:SSLv3/TLS read server hello\ndepth=2 C=US, O=Google Trust Services LLC, CN=GTS Root R1\nverify return:1\ndepth=1 C=US, O=Google Trust Services, CN=WR2\nverify return:1\ndepth=0 CN=*.google.com\nverify return:1\nSSL_connect:SSLv3/TLS read server certificate\nSSL_connect:SSLv3/TLS read server key exchange\nSSL_connect:SSLv3/TLS read server done\nSSL_connect:SSLv3/TLS write client key exchange\nSSL_connect:SSLv3/TLS write change cipher spec\nSSL_connect:SSLv3/TLS write finished\nSSL_connect:SSLv3/TLS write finished\nSSL_connect:SSLv3/TLS read server session ticket\nSSL_connect:SSLv3/TLS read change cipher spec\nSSL_connect:SSLv3/TLS read finished\n....\n\nSSL-Session:\n    Protocol  : TLSv1.2\n    Cipher    : ECDHE-ECDSA-CHACHA20-POLY1305\n    Session-ID: 8CF6FD6E752A6B4DE7AAE2E09513B91E855CABB7D401274FBE9316E6591B0138\n    Session-ID-ctx:\n    Master-Key: $(\u4f60\u9084\u60f3\u5077\u770b\u6211\u7684\u5bc6\u9470\u5594?)\n    PSK identity: None\n    PSK identity hint: None\n    SRP username: None\n    TLS session ticket lifetime hint: 100800 (seconds)\n    TLS session ticket:\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8154:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/1-82cc6f9d5abb35b8df54b9d82a5adf38.png"},6465:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/2-78a6e67f486e936349f68bc118c1a33a.png"},6520:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/3-0c86ded3a5cbe9d7008ce7071e47f20a.png"},1575:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/key_relation-9146817b3037852fd1bc0f6a1cb0c714.png"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var r=s(6540);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);