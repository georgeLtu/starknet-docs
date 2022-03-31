"use strict";(self.webpackChunkstarknet_docs=self.webpackChunkstarknet_docs||[]).push([[574],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7684:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={},c="On-Chain Data",s={unversionedId:"DataAvailabilty/on-chain-data",id:"DataAvailabilty/on-chain-data",title:"On-Chain Data",description:"Introduction",source:"@site/docs/DataAvailabilty/on-chain-data.md",sourceDirName:"DataAvailabilty",slug:"/DataAvailabilty/on-chain-data",permalink:"/docs/DataAvailabilty/on-chain-data",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DataAvailabilty/on-chain-data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contract Storage",permalink:"/docs/Contracts/contract-storage"},next:{title:"StarkNet state",permalink:"/docs/State/starknet-state"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Format",id:"format",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Extract from Ethereum",id:"extract-from-ethereum",children:[],level:2}],d={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"on-chain-data"},"On-Chain Data"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In the current stage of the Alpha, StarkNet operates in a ZK-Rollup mode. This means that upon the acceptance of a state update on-chain, the state diff between the previous and new state is sent as calldata to Ethereum."),(0,o.kt)("p",null,"This data allows anyone that observes Ethereum to reconstruct the current state of StarkNet. Note that to update the StarkNet state on L1, it suffices to send a valid proof \u2013 without information on the transactions or particular changes that this update caused. Consequently, more information must be provided in order to allow other parties to locally track StarkNet\u2019s state."),(0,o.kt)("h2",{id:"format"},"Format"),(0,o.kt)("p",null,"The state diffs contain information on every contact whose storage was updated and additional information on contract deployments. Those differences are sent as ",(0,o.kt)("inlineCode",{parentName:"p"},"unit256[]")," array as part of the calldata, and are encoded as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Number of cells that encode contract deployments"),(0,o.kt)("li",{parentName:"ul"},"For each deployed contract, we have:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract_address")," - the ",(0,o.kt)("a",{parentName:"li",href:"../Contracts/contract-address"},"address")," of the deployed contract"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract_hash")," - the ",(0,o.kt)("a",{parentName:"li",href:"../Contracts/contract-hash"},"hash")," of the contract"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"len(constructor_call_data)")," - the number of arguments to the contract constructor"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"constructor_call_data")," - the list of arguments to the constructor"))),(0,o.kt)("li",{parentName:"ul"},"Number of contracts whose storage is updated"),(0,o.kt)("li",{parentName:"ul"},"For each such contract, we have:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract_address")," - the ",(0,o.kt)("a",{parentName:"li",href:"../Contracts/contract-address"},"address")," of the contract"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"num_of_storage_updates")," - number of storage updates"),(0,o.kt)("li",{parentName:"ul"},"For each storage update:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key")," - the address inside the contract's storage where the value is updated"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value")," - the new value")))))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Below we show an example of on chain data which was extracted from L1, and proceed to decode it according to the above format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"[\n  5,\n  2472939307328371039455977650994226407024607754063562993856224077254594995194,\n  1336043477925910602175429627555369551262229712266217887481529642650907574765,\n  2,\n  955723665991825982403667749532843665052270105995360175183368988948217233556,\n  2439272289032330041885427773916021390926903450917097317807468082958581062272,\n  5,\n  2019172390095051323869047481075102003731246132997057518965927979101413600827,\n  1, 5, 102,\n  2111158214429736260101797453815341265658516118421387314850625535905115418634,\n  2,\n  619473939880410191267127038055308002651079521370507951329266275707625062498,\n  1471584055184889701471507129567376607666785522455476394130774434754411633091,\n  619473939880410191267127038055308002651079521370507951329266275707625062499,\n  541081937647750334353499719661793404023294520617957763260656728924567461866,\n  2472939307328371039455977650994226407024607754063562993856224077254594995194,\n  1,\n  955723665991825982403667749532843665052270105995360175183368988948217233556,\n  2439272289032330041885427773916021390926903450917097317807468082958581062272,\n  3429319713503054399243751728532349500489096444181867640228809233993992987070,\n  1, 5, 1110,\n  3476138891838001128614704553731964710634238587541803499001822322602421164873,\n  6, 59664015286291125586727181187045849528930298741728639958614076589374875456,\n  600,\n  221246409693049874911156614478125967098431447433028390043893900771521609973,\n  400,\n  558404273560404778508455254030458021013656352466216690688595011803280448030,\n  100,\n  558404273560404778508455254030458021013656352466216690688595011803280448031,\n  200,\n  558404273560404778508455254030458021013656352466216690688595011803280448032,\n  300,\n  1351148242645005540004162531550805076995747746087542030095186557536641755046,\n  500\n]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first element, 5, is the number of cells that encode contracts deployment."),(0,o.kt)("li",{parentName:"ul"},"The next five elements describe a single contract deployment with the following parameters:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract_address"),":")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"2472939307328371039455977650994226407024607754063562993856224077254594995194\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract_hash"),":")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"1336043477925910602175429627555369551262229712266217887481529642650907574765\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Two constructor arguments (indicated by the cell at index 3):")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"955723665991825982403667749532843665052270105995360175183368988948217233556\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"2439272289032330041885427773916021390926903450917097317807468082958581062272\n"))),(0,o.kt)("li",{parentName:"ul"},"The next element, ",(0,o.kt)("inlineCode",{parentName:"li"},"5")," (index 6 in the array), is the number of contracts whose storage was updated. We will take only the first contract as an example.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract_address"),":")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"2019172390095051323869047481075102003731246132997057518965927979101413600827\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"One update (indicated by the cell at index 8):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The value at key 5 was changed to 102.")))))),(0,o.kt)("p",null,"The next 4 contracts storage updates are interpreted in the same manner."),(0,o.kt)("h2",{id:"extract-from-ethereum"},"Extract from Ethereum"),(0,o.kt)("p",null,"The data described above is sent across several Ethereum transactions, each holding a part of this array as calldata. Each new StarkNet block has its associated state diff transactions. You may find the code for extracting this data from Ethereum in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eqlabs/pathfinder/blob/2fe6f549a0b8b9923ed7a21cd1a588bc571657d6/crates/pathfinder/src/ethereum/state_update/retrieve.rs"},"Pathfinder's repo"),". Pathfinder is the first StarkNet full node implementation. You may also take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eqlabs/pathfinder/blob/2fe6f549a0b8b9923ed7a21cd1a588bc571657d6/crates/pathfinder/resources/fact_retrieval.py"},"python script")," which extracts the same information."))}u.isMDXComponent=!0}}]);