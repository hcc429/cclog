"use strict";(self.webpackChunkcclog=self.webpackChunkcclog||[]).push([[781],{631:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>x,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>j});var r=s(4429),i=s(4848),t=s(8453);const d={title:"14X0 \u4e4b\u4e82",date:"2024/11/10"},c=void 0,x={authorsImageUrls:[]},j=[{value:"\u8d77\u56e0",id:"\u8d77\u56e0",level:2},{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:3},{value:"VPN",id:"vpn",level:2},{value:"WireGuard",id:"wireguard",level:3},{value:"\u73fe\u5be6",id:"\u73fe\u5be6",level:3},{value:"HOW",id:"how",level:3},{value:"WHY",id:"why",level:3},{value:"\u7d50\u8ad6\uff1a\u6c92\u6709\u7d50\u8ad6",id:"\u7d50\u8ad6\u6c92\u6709\u7d50\u8ad6",level:2}];function l(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u8d77\u56e0",children:"\u8d77\u56e0"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e8b\u60c5\u662f\u9019\u6a23\u7684\uff0c\u6211\u539f\u672c\u9839\u5ee2\u7684\u8eba\u5728\u5e8a\u4e0a\u6ed1\u8106",(0,i.jsx)(n.br,{}),"\n","\u5343\u7bc7\u4e00\u5f8b\u7684\u90fd\u662f\u5225\u4eba\u7684\u5bf6\u53ef\u5922\u597d\u5361\u770b\u5f97\u6211\u6709\u9ede\u7169",(0,i.jsx)(n.br,{}),"\n","\u76f4\u5230\u770b\u5230\u67d0\u4e00\u7bc7\u8106\u6587\u5728\u8aaa MTU \u8207 VPN \u901f\u5ea6\u7684\u95dc\u4fc2"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:s(1574).A+"",width:"1170",height:"1136"}),"\n\u4e00\u77ac\u9593\u89ba\u5f97\u88ab\u7956\u4e86",(0,i.jsx)(n.br,{}),"\n","\u56e0\u70ba\u6211\u6628\u5929\u624d\u5728\u554f\u5c45\u6279\u8e22\u5927\u54e5\u70ba\u4ec0\u9ebc\u9700\u8981\u6709 MTU \u9019\u500b\u6771\u897f",(0,i.jsx)(n.br,{}),"\n","\u4ed6\u56de\u7b54\u6211\u9019\u5c31\u662f\u4e00\u500b\u5c6c\u6027",(0,i.jsx)(n.br,{}),"\n","\u5c31\u50cf\u6c34\u7ba1\u7684\u622a\u9762\u7a4d\u4e00\u6a23",(0,i.jsx)(n.br,{}),"\n","\u52c9\u5f37\u7d66\u904e\uff0c\u4f46\u9084\u662f\u89ba\u5f97\u6709\u9ede\u6577\u884d\ud83d\ude23"]}),"\n",(0,i.jsx)(n.h3,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,i.jsxs)(n.p,{children:["\u9032\u5165\u6b63\u984c\u524d\u5148\u7c21\u55ae\u4ecb\u7d39\u4e00\u4e0b MTU \u8ddf\u985e\u4f3c\u7684\u6771\u897f MSS",(0,i.jsx)(n.br,{}),"\n","MTU (Maximum Transmit Unit) \u6307\u7684\u662f\u4e00\u500b\u7db2\u8def\u8a2d\u5099\u53ef\u4ee5\u50b3\u8f38\u7684\u5c01\u5305\u7684\u6700\u5927\u5927\u5c0f",(0,i.jsx)(n.br,{}),"\n","\u82e5\u662f\u5c01\u5305\u5927\u5c0f\u8d85\u904e\u5c31\u6703\u5206\u5272",(0,i.jsx)(n.br,{}),"\n","\u50cf\u662f\u4e0b\u5716\u8ca8\u7269\u592a\u5927\u904e\u4e0d\u53bb (from ChatGPT)",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:s(1301).A+"",width:"1024",height:"1024"}),(0,i.jsx)(n.br,{}),"\n","\u800c\u6211\u5011\u4e0d\u7ba1\u662fTCP \u9084\u662f UDP\u5e95\u5c64\u90fd\u662f\u900f\u904e ip \u5c01\u5305\u50b3\u51fa\u53bb",(0,i.jsx)(n.br,{}),"\n","\u56e0\u6b64\u6211\u5011\u4e00\u500b\u5c01\u5305\u771f\u7684\u80fd\u585e\u7684 TCP/UDP \u5c01\u5305\u5927\u5c0f\u61c9\u8a72\u662f (MTU - IP Header)",(0,i.jsx)(n.br,{}),"\n","\u6211\u5011\u4ee5\u4e0b\u90fd\u4ee5 TCP \u5c01\u5305\u70ba\u4f8b",(0,i.jsx)(n.br,{}),"\n","\u800c\u9019\u4e9b TCP \u5c01\u5305\u5305\u542b\u4e86 TCP Header + TCP \u8cc7\u6599",(0,i.jsx)(n.br,{}),"\n","MSS (Maximum Segmeng Size) \u6307\u7684\u5c31\u662f\u4e00\u500b\u5c01\u5305\u88e1 TCP \u8cc7\u6599\u6700\u591a\u53ef\u4ee5\u7528\u591a\u5c11",(0,i.jsx)(n.br,{}),"\n","\u5e95\u4e0b\u9019\u5f35\u4f86\u81ea cloudfare \u7684\u5716\u7247\u53ef\u4ee5\u5f88\u6e05\u695a\u7684\u8868\u9054",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"\u5c01\u5305",src:s(4174).A+"",width:"441",height:"282"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u90a3\u773c\u5c16\u4e00\u9ede\u7684\u8001\u9435\u5c31\u6703\u767c\u73fe MSS \u4e0a\u9762\u5beb\u8457 1460 Bytes",(0,i.jsx)(n.br,{}),"\n","\u5f8c\u9762\u9084\u6709\u5f88\u591a\u63a5\u8fd1\u7684\u6578\u5b57\uff0c\u9019\u5c31\u662f\u6a19\u984c\u7684\u7531\u4f86",(0,i.jsx)(n.br,{}),"\n","By the way",(0,i.jsx)(n.br,{}),"\n","\u6211\u4e00\u76f4\u6253\u9019\u4e9b\u6578\u5b57\u4f46\u8166\u888b\u88e1\u9762\u51fa\u73fe\u7684\u90fd\u662f 1450 (\u4e82\u8b1b\u8a71"]}),"\n",(0,i.jsx)(n.h2,{id:"vpn",children:"VPN"}),"\n",(0,i.jsx)(n.h3,{id:"wireguard",children:"WireGuard"}),"\n",(0,i.jsxs)(n.p,{children:["\u90a3\u6709\u4e86\u4e0a\u9762\u7684\u77e5\u8b58\u6211\u5011\u53ef\u4ee5\u7e7c\u7e8c\u4e86",(0,i.jsx)(n.br,{}),"\n","\u4eca\u5929\u7684\u4e3b\u89d2\u662f Surfshark VPN",(0,i.jsx)(n.br,{}),"\n","\u597d\u5de7\u4e0d\u5de7\u6211\u524d\u5e7e\u500b\u6708\u5fd8\u8a18\u9000\u8a02\u6240\u4ee5\u88ab\u4ed6\u5751\u4e86 1000\u591a",(0,i.jsx)(n.br,{}),"\n","\u90a3 VPN \u61c9\u8a72\u7b97\u662f\u4e00\u500b\u6982\u5ff5\uff0c\u6709\u5f88\u591a\u4e0d\u540c\u7684\u5354\u5b9a\u4f86\u5be6\u73fe\u5b83",(0,i.jsx)(n.br,{}),"\n","\u73fe\u5728\u7528\u7684\u6700\u5ee3\u6cdb\u7684\u61c9\u8a72\u662f ",(0,i.jsx)(n.a,{href:"https://zh.wikipedia.org/zh-tw/WireGuard",children:"WireGuard"}),(0,i.jsx)(n.br,{}),"\n","\u4f46\u6211\u5011\u4eca\u5929\u7684\u91cd\u9ede\u4e5f\u4e0d\u662f\u4ed6\u5728\u505a\u4ec0\u9ebc",(0,i.jsx)(n.br,{}),"\n","\u56e0\u6b64\u53ea\u9700\u8981\u77e5\u9053\u4ee5\u4e0b\u57fa\u672c\u77e5\u8b58"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528 UDP"}),"\n",(0,i.jsx)(n.li,{children:"\u82e5\u85c9\u7531\u5b83\u50b3\u905e ipv4\uff0c Header \u662f 20 Bytes\uff0cipv6 \u5247\u70ba 40 Bytes"}),"\n",(0,i.jsx)(n.li,{children:"\u4ed6\u9084\u6703\u9700\u8981\u984d\u5916\u7684 32 bytes \u7684\u6a19\u982d"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u770b\u5230\u9019\u908a",(0,i.jsx)(n.br,{}),"\n","\u54ce\u5466\uff0c\u591a\u4e86\u4e00\u500b 20 \u8ddf 40 \u7684\u62fc\u5716\u53ef\u4ee5\u7528\u4e86",(0,i.jsx)(n.br,{}),"\n","\u6211\u5011\u5148\u4f86\u770b\u770b\u5177\u9ad4\u7684\u6771\u897f"]}),"\n",(0,i.jsx)(n.h3,{id:"\u73fe\u5be6",children:"\u73fe\u5be6"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"ifconfig"})," \u4f86\u770b VPN \u4f7f\u7528\u7684 interface \u53ea\u770b\u5230\u4ee5\u4e0b",(0,i.jsx)(n.br,{}),"\n","( \u6211\u662f\u900f\u904e\u4e0a\u9762\u7684 ip \u4f86\u5f97\u77e5\u4ed6\u5c31\u662f VPN \u4f7f\u7528\u7684 )"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"utun9: flags=8051<UP,POINTOPOINT,RUNNING,MULTICAST> mtu 1400\n        options=6460<TSO4,TSO6,CHANNEL_IO,PARTIAL_CSUM,ZEROINVERT_CSUM>\n        inet 10.14.0.2 --\x3e 10.14.0.2 netmask 0xffff0000\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6069... mtu \u8a2d\u6210 1400 \u5462",(0,i.jsx)(n.br,{}),"\n","\u901a\u5e38 mtu \u90fd\u6703\u662f 1500",(0,i.jsx)(n.br,{}),"\n","( \u56e0\u70ba Layer2 \u7684\u4e59\u592a\u7db2\u8def\u5354\u5b9a )",(0,i.jsx)(n.br,{}),"\n","\u90a3\u70ba\u4ec0\u9ebc\u4ed6\u8981\u8a2d\u5b9a\u6210 1400 \u5462\uff1f"]}),"\n",(0,i.jsx)(n.h3,{id:"how",children:"HOW"}),"\n",(0,i.jsxs)(n.p,{children:["VPN \u7684\u904b\u4f5c\u539f\u7406\u5c31\u50cf\u662f\u628a\u4e00\u5c01\u4fe1\u585e\u5728\u53e6\u4e00\u5c01\u4fe1\u88e1\u9762",(0,i.jsx)(n.br,{}),"\n","\u800c\u5916\u9762\u90a3\u5c01\u662f\u5bc4\u7d66 VPN \u7684\u4fe1\uff0c\u88e1\u9762\u90a3\u5c01\u624d\u662f\u771f\u7684\u8981\u5bc4\u5f97\u5c0d\u8c61",(0,i.jsx)(n.br,{}),"\n","\u7b49\u5bc4\u7d66 VPN \u5f8c\u518d\u7531 VPN \u5bc4\u51fa\u88e1\u9762\u7684\n\u4fe1\u5176\u5be6\u5c31\u662f\u5c01\u5305",(0,i.jsx)(n.br,{}),"\n","\u800c\u6211\u5011\u5728\u4fe1\u4e0a\u6703\u5beb\u7684\u8cc7\u8a0a\u8ddf\u90f5\u7968\u5c31\u662f\u5c01\u5305\u7684\u6a19\u982d",(0,i.jsx)(n.br,{}),"\n","\u4f46\u4eca\u5929\u5c31\u7b97\u4f60\u628a\u4fe1\u585e\u5728\u5225\u4eba\u7684\u4fe1\u5c01\u88e1",(0,i.jsx)(n.br,{}),"\n","\u5c0d\u90f5\u5dee\u4f86\u8aaa\u90a3\u5c31\u662f\u4e00\u5c01\u4fe1",(0,i.jsx)(n.br,{}),"\n","\u4e00\u5c01\u4fe1\u80fd\u585e\u7684\u8cc7\u8a0a\u5c31\u662f\u9019\u9ebc\u591a",(0,i.jsx)(n.br,{}),"\n","\u6240\u4ee5\u4f60\u5728\u900f\u904e VPN \u5bc4\u4fe1\u6642\u6703\u9700\u8981\u518d\u984d\u5916\u8ca0\u64d4\u5916\u9762\u90a3\u5c01\u4fe1\u7684\u90f5\u7968\u7684\u6210\u672c",(0,i.jsx)(n.br,{}),"\n","\u90a3\u554f\u984c\u9084\u662f\u4e00\u6a23\uff0c\u70ba\u4ec0\u9ebc\u9700\u8981\u6539\u52d5 MTU ?"]}),"\n",(0,i.jsx)(n.h3,{id:"why",children:"WHY"}),"\n",(0,i.jsxs)(n.p,{children:["TCP \u5c01\u5305\u80fd\u88dd\u7684\u8cc7\u6599\u4e5f\u5c31\u662f MSS = (MTU - (IP + TCP \u7684\u6a19\u982d))",(0,i.jsx)(n.br,{}),"\n","\u800c TCP \u8ddf IP \u7684\u6a19\u982d\u5927\u5c0f\u662f\u56fa\u5b9a\u7684 40 (\u5047\u5b9a ipv4, ipv6 \u6703\u591a 20)",(0,i.jsx)(n.br,{}),"\n","\u56e0\u6b64\u53ef\u4ee5\u8a8d\u5b9a\u6210 MTU - 40",(0,i.jsx)(n.br,{}),"\n","\u4f46\u6211\u5011\u4eca\u5929\u5176\u5be6\u9084\u8981\u8ca0\u64d4\u5916\u9762\u90a3\u5c01\u4fe1\u7684\u6a19\u982d\u6210\u672c",(0,i.jsx)(n.br,{}),"\n","\u82e5\u662f MTU \u9084\u662f\u8ddf\u4ee5\u524d\u4e00\u6a23\u7684\u8a71\u6211\u5011\u7684 TCP \u5c01\u5305\u5176\u5be6\u592a\u5927\u5305\u4e86",(0,i.jsx)(n.br,{}),"\n","\u90a3\u5c31\u53ea\u80fd\u5728\u8ca0\u64d4\u66f4\u591a\u6210\u672c\u4f86\u5bc4\u5f88\u591a\u5c0f\u5c01\u7684\uff0c\u6700\u5f8c\u5728\u7d44\u88dd\u8d77\u4f86"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7d50\u8ad6\u6c92\u6709\u7d50\u8ad6",children:"\u7d50\u8ad6\uff1a\u6c92\u6709\u7d50\u8ad6"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f46\u5230\u5e95\u61c9\u8a72\u8a2d\u5b9a\u591a\u5c11\uff1f",(0,i.jsx)(n.br,{}),"\n","\u7dad\u57fa\u767e\u79d1\u8aaa Wireguard \u901a\u5e38\u662f 1420 - 1440 (ipv4 \u8207 ipv6 \u7684\u5dee\u7570)",(0,i.jsx)(n.br,{}),"\n","\u9019\u500b\u6578\u5b57\u4f86\u81ea\u4ee5\u4e0b",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"1500"})," - (UDP(",(0,i.jsx)(n.code,{children:"8"}),") + ipv4(",(0,i.jsx)(n.code,{children:"20"}),") + (Wireguard(",(0,i.jsx)(n.code,{children:"32"}),"))) = ",(0,i.jsx)(n.code,{children:"1440"}),(0,i.jsx)(n.br,{}),"\n","\u800c\u6211\u5011\u771f\u6b63\u7684\u8cc7\u6599 TCP \u5c01\u5305\u5728\u8a08\u7b97\u6642\u5728\u6263\u6389\u6b63\u5e38\u7684\u6210\u672c ",(0,i.jsx)(n.code,{children:"40"}),(0,i.jsx)(n.br,{}),"\n","\ud83e\udd1f\ud83c\udffb\uff5e  \u6709\u4e86\n\u4f46\u6700\u4e0a\u9762\u7684\u8cbc\u6587\u8aaa\u5b83\u8a2d\u5b9a ",(0,i.jsx)(n.code,{children:"1390"}),(0,i.jsx)(n.br,{}),"\n","\u800c\u6211\u81ea\u5df1\u7684\u8a2d\u5b9a\u662f ",(0,i.jsx)(n.code,{children:"1400"}),(0,i.jsx)(n.br,{}),"\n","\u5230\u5e95\u662f\u70ba\u4ec0\u9ebc...\n\u6216\u8a31\u771f\u76f8\u5c31\u9019\u6a23\u6c38\u9060\u77f3\u6c89\u5927\u6d77..."]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1301:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/cargo-ef8cd81fb1f30af9190e54cba7e48008.webp"},4174:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/packet-d3346b198c70a6409144fbf85229f3d5.png"},1574:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/thread-bbbcb4c5e9325cd602d09dd7e4509603.jpg"},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var r=s(6540);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}},4429:e=>{e.exports=JSON.parse('{"permalink":"/cclog/secret/vpn-mtu-mss","source":"@site/secret/vpn-mtu-mss.md","title":"14X0 \u4e4b\u4e82","description":"\u8d77\u56e0","date":"2024-11-10T00:00:00.000Z","tags":[],"readingTime":5.285,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"14X0 \u4e4b\u4e82","date":"2024/11/10"},"unlisted":false}')}}]);