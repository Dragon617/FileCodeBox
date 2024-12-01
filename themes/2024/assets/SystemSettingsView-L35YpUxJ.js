import{B as C,r as b,u as B,p as m,b as v,d as e,n as t,e as s,h as l,v as i,C as x,F as f,x as _,t as p,i as M,z as F,A as w,L as A}from"./index-wa8zA7qL.js";const z={class:"p-6 h-screen overflow-y-auto custom-scrollbar"},E={class:"space-y-4"},T={class:"grid grid-cols-1 gap-6"},K={class:"space-y-2"},I={class:"space-y-2"},j={class:"space-y-2"},G={class:"relative"},N={class:"space-y-2"},L={class:"space-y-2"},R=["value"],$={class:"space-y-2"},H={class:"grid grid-cols-1 gap-6 mt-8"},q={class:"space-y-2"},J={class:"space-y-2"},O={class:"mt-8"},P={class:"space-y-4"},Q={class:"space-y-2"},W={key:0,class:"space-y-4"},X={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},Y={class:"space-y-2"},Z={class:"space-y-2"},ee={class:"space-y-2"},oe={class:"space-y-2"},re={class:"space-y-2"},te={class:"space-y-2"},ae={class:"space-y-2"},se={class:"space-y-2"},ne={class:"flex items-center"},le=["aria-checked"],ie={class:"mt-8"},de={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},ue={class:"space-y-2"},ge={class:"flex items-center space-x-2"},ce={class:"space-y-2"},ye={class:"flex items-center space-x-2"},pe={class:"space-y-2"},be={class:"flex items-center space-x-2"},me={class:"space-y-2"},ve={class:"flex flex-wrap gap-3"},xe=["value"],he={class:"space-y-2"},fe={class:"flex items-center space-x-2"},_e={class:"space-y-2"},we={class:"flex items-center"},ke=["aria-checked"],Ue={class:"mt-8"},Se={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},Ve={class:"space-y-2"},De={class:"flex items-center space-x-2"},Ce={class:"space-y-2"},Be={class:"flex items-center space-x-2"},Ae=C({__name:"SystemSettingsView",setup(Me){const a=F("isDarkMode"),n=b({name:"",description:"",file_storage:"",themesChoices:[],expireStyle:[],admin_token:"",robotsText:"",keywords:"",notify_title:"",notify_content:"",openUpload:1,uploadSize:1,uploadMinute:1,max_save_seconds:0,opacity:.9,s3_access_key_id:"",background:"",showAdminAddr:0,page_explain:"",s3_secret_access_key:"",aws_session_token:"",s3_signature_version:"",s3_region_name:"",s3_bucket_name:"",s3_endpoint_url:"",s3_hostname:"",uploadCount:1,errorMinute:1,errorCount:1,s3_proxy:0,themesSelect:""}),c=b(1),y=b("MB"),u=b(1),g=b("天"),k=(d,o)=>d*{秒:1,分:60,时:3600,天:86400}[o],U=()=>{w({url:"/admin/config/get",method:"get"}).then(d=>{n.value=d.detail;let o=n.value.uploadSize;o>=1024*1024*1024?(c.value=Math.round(o/(1024*1024*1024)),y.value="GB"):o>=1024*1024?(c.value=Math.round(o/(1024*1024)),y.value="MB"):(c.value=Math.round(o/1024),y.value="KB");let r=n.value.max_save_seconds;r===0?(u.value=7,g.value="天"):r%86400===0&&r>=86400?(u.value=r/86400,g.value="天"):r%3600===0&&r>=3600?(u.value=r/3600,g.value="时"):r%60===0&&r>=60?(u.value=r/60,g.value="分"):(u.value=r,g.value="秒")})},h=B(),S=(d,o)=>d*{KB:1024,MB:1048576,GB:1073741824}[o],V=()=>{const d={...n.value};d.uploadSize=S(c.value,y.value),u.value===0?d.max_save_seconds=7*86400:d.max_save_seconds=k(u.value,g.value),w({url:"/admin/config/update",method:"patch",data:d}).then(o=>{o.code==200?h.showAlert("保存成功","success"):h.showAlert(o.message,"error")})};return U(),(d,o)=>(m(),v("div",z,[e("h2",{class:t(["text-2xl font-bold mb-6",[s(a)?"text-white":"text-gray-800"]])}," 系统设置 ",2),e("div",{class:t(["space-y-6 rounded-lg shadow-md p-6",[s(a)?"bg-gray-800 bg-opacity-70":"bg-white"]])},[e("section",E,[e("h3",{class:t(["text-lg font-medium mb-4",[s(a)?"text-white":"text-gray-800"]])}," 基本设置 ",2),e("div",T,[e("div",K,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 网站名称 ",2),l(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=r=>n.value.name=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.name]])]),e("div",I,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 网站描述 ",2),l(e("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=r=>n.value.description=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.description]])]),e("div",j,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 管理员密码 ",2),e("div",G,[l(e("input",{type:"password","onUpdate:modelValue":o[2]||(o[2]=r=>n.value.admin_token=r),placeholder:"留空则不修改密码",class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.admin_token]]),e("div",{class:t(["absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-400",[s(a)?"text-gray-500":"text-gray-400"]])},o[27]||(o[27]=[e("span",{class:"text-xs"},"留空则不修改",-1)]),2)])]),e("div",N,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 关键词 ",2),l(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=r=>n.value.keywords=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.keywords]])]),e("div",L,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 主题选择 ",2),l(e("select",{"onUpdate:modelValue":o[4]||(o[4]=r=>n.value.themesSelect=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border appearance-none bg-no-repeat bg-right focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none cursor-pointer",[s(a)?"bg-gray-700 border-gray-600 text-white hover:border-gray-500":"border-gray-300 hover:border-gray-400"]]),style:{"background-image":"url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%208l3%203%203-3%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')"}},[(m(!0),v(f,null,_(n.value.themesChoices,r=>(m(),v("option",{value:r.key,key:r.key},p(r.name)+" (by "+p(r.author)+" V"+p(r.version)+") ",9,R))),128))],2),[[x,n.value.themesSelect]])]),e("div",$,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," Robots.txt ",2),l(e("textarea",{"onUpdate:modelValue":o[5]||(o[5]=r=>n.value.robotsText=r),rows:"3",class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.robotsText]])])]),e("div",H,[e("div",q,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 通知标题 ",2),l(e("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=r=>n.value.notify_title=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.notify_title]])]),e("div",J,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 通知内容 ",2),l(e("textarea",{"onUpdate:modelValue":o[7]||(o[7]=r=>n.value.notify_content=r),rows:"3",class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.notify_content]])])]),e("div",O,[e("h3",{class:t(["text-lg font-medium mb-4",[s(a)?"text-white":"text-gray-800"]])}," 存储设置 ",2),e("div",P,[e("div",Q,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 存储方式 ",2),l(e("select",{"onUpdate:modelValue":o[8]||(o[8]=r=>n.value.file_storage=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border appearance-none bg-no-repeat bg-right focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none cursor-pointer",[s(a)?"bg-gray-700 border-gray-600 text-white hover:border-gray-500":"border-gray-300 hover:border-gray-400"]]),style:{"background-image":"url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%208l3%203%203-3%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')"}},o[28]||(o[28]=[e("option",{value:"local"},"本地存储",-1),e("option",{value:"s3"},"S3 存储",-1)]),2),[[x,n.value.file_storage]])]),n.value.file_storage==="s3"?(m(),v("div",W,[e("div",X,[e("div",Y,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," S3 AccessKeyId ",2),l(e("input",{type:"text","onUpdate:modelValue":o[9]||(o[9]=r=>n.value.s3_access_key_id=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.s3_access_key_id]])]),e("div",Z,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," S3 SecretAccessKey ",2),l(e("input",{type:"password","onUpdate:modelValue":o[10]||(o[10]=r=>n.value.s3_secret_access_key=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.s3_secret_access_key]])]),e("div",ee,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," S3 BucketName ",2),l(e("input",{type:"text","onUpdate:modelValue":o[11]||(o[11]=r=>n.value.s3_bucket_name=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.s3_bucket_name]])]),e("div",oe,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," S3 EndpointUrl ",2),l(e("input",{type:"text","onUpdate:modelValue":o[12]||(o[12]=r=>n.value.s3_endpoint_url=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.s3_endpoint_url]])]),e("div",re,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," S3 Region Name ",2),l(e("input",{type:"text","onUpdate:modelValue":o[13]||(o[13]=r=>n.value.s3_region_name=r),placeholder:"auto",class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.s3_region_name]])]),e("div",te,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," S3 Signature Version ",2),l(e("select",{"onUpdate:modelValue":o[14]||(o[14]=r=>n.value.s3_signature_version=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white hover:border-gray-500":"border-gray-300 hover:border-gray-400"]])},o[29]||(o[29]=[e("option",{value:"s3v2"},"S3v2",-1),e("option",{value:"s3v4"},"S3v4",-1)]),2),[[x,n.value.s3_signature_version]])]),e("div",ae,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," S3 Hostname ",2),l(e("input",{type:"text","onUpdate:modelValue":o[15]||(o[15]=r=>n.value.s3_hostname=r),class:t(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.s3_hostname]])]),e("div",se,[e("label",{class:t(["block text-sm font-medium mb-2",[s(a)?"text-gray-300":"text-gray-700"]])}," 启用代理 ",2),e("div",ne,[e("button",{type:"button",onClick:o[16]||(o[16]=r=>n.value.s3_proxy=n.value.s3_proxy===1?0:1),class:t(["relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",[n.value.s3_proxy===1?"bg-indigo-600":"bg-gray-200"]]),role:"switch","aria-checked":n.value.s3_proxy===1},[e("span",{class:t(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",[n.value.s3_proxy===1?"translate-x-5":"translate-x-0",s(a)&&n.value.s3_proxy!==1?"bg-gray-100":"bg-white"]])},null,2)],10,le),e("span",{class:t(["ml-3 text-sm",[s(a)?"text-gray-300":"text-gray-700"]])},p(n.value.s3_proxy===1?"已开启":"已关闭"),3)])])])])):M("",!0)])]),e("div",ie,[e("h3",{class:t(["text-lg font-medium mb-4",[s(a)?"text-white":"text-gray-800"]])}," 上传限制 ",2),e("div",de,[e("div",ue,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 每分钟上传限制 ",2),e("div",ge,[l(e("input",{type:"number","onUpdate:modelValue":o[17]||(o[17]=r=>n.value.uploadMinute=r),class:t(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.uploadMinute]]),e("span",{class:t([s(a)?"text-gray-300":"text-gray-700"])},"分钟",2)])]),e("div",ce,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 上传数量限制 ",2),e("div",ye,[l(e("input",{type:"number","onUpdate:modelValue":o[18]||(o[18]=r=>n.value.uploadCount=r),class:t(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.uploadCount]]),e("span",{class:t([s(a)?"text-gray-300":"text-gray-700"])},"个文件",2)])]),e("div",pe,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 文件大小限制 ",2),e("div",be,[l(e("input",{type:"number","onUpdate:modelValue":o[19]||(o[19]=r=>c.value=r),class:t(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,c.value]]),l(e("select",{"onUpdate:modelValue":o[20]||(o[20]=r=>y.value=r),class:t(["rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white hover:border-gray-500":"border-gray-300 hover:border-gray-400"]])},o[30]||(o[30]=[e("option",{value:"KB"},"KB",-1),e("option",{value:"MB"},"MB",-1),e("option",{value:"GB"},"GB",-1)]),2),[[x,y.value]])])]),e("div",me,[e("label",{class:t(["block text-sm font-medium mb-2",[s(a)?"text-gray-300":"text-gray-700"]])}," 过期方式 ",2),e("div",ve,[(m(),v(f,null,_(["day","hour","minute","forever","count"],r=>e("label",{key:r,class:"relative inline-flex items-center group cursor-pointer"},[l(e("input",{type:"checkbox",value:r,"onUpdate:modelValue":o[21]||(o[21]=D=>n.value.expireStyle=D),class:"peer sr-only"},null,8,xe),[[A,n.value.expireStyle]]),e("div",{class:t(["px-4 py-2 rounded-full border-2 transition-all duration-200 select-none",[n.value.expireStyle.includes(r)?(s(a),"bg-indigo-600 border-indigo-600 text-white"):s(a)?"bg-gray-700 border-gray-600 text-gray-300 hover:border-indigo-500":"bg-white border-gray-300 text-gray-700 hover:border-indigo-500"]])},p({day:"按天",hour:"按小时",minute:"按分钟",forever:"永久",count:"按次数"}[r]),3)])),64))])]),e("div",he,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 最长保存时间 ",2),e("div",fe,[l(e("input",{type:"number","onUpdate:modelValue":o[22]||(o[22]=r=>u.value=r),class:t(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,u.value]]),l(e("select",{"onUpdate:modelValue":o[23]||(o[23]=r=>g.value=r),class:t(["rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white hover:border-gray-500":"border-gray-300 hover:border-gray-400"]])},o[31]||(o[31]=[e("option",{value:"秒"},"秒",-1),e("option",{value:"分"},"分",-1),e("option",{value:"时"},"时",-1),e("option",{value:"天"},"天",-1)]),2),[[x,g.value]])])]),e("div",_e,[e("label",{class:t(["block text-sm font-medium mb-2",[s(a)?"text-gray-300":"text-gray-700"]])}," 游客上传 ",2),e("div",we,[e("button",{type:"button",onClick:o[24]||(o[24]=r=>n.value.openUpload=n.value.openUpload===1?0:1),class:t(["relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",[n.value.openUpload===1?"bg-indigo-600":"bg-gray-200"]]),role:"switch","aria-checked":n.value.openUpload===1},[e("span",{class:t(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",[n.value.openUpload===1?"translate-x-5":"translate-x-0",s(a)&&n.value.openUpload!==1?"bg-gray-100":"bg-white"]])},null,2)],10,ke),e("span",{class:t(["ml-3 text-sm",[s(a)?"text-gray-300":"text-gray-700"]])},p(n.value.openUpload===1?"已开启":"已关闭"),3)])])])]),e("div",Ue,[e("h3",{class:t(["text-lg font-medium mb-4",[s(a)?"text-white":"text-gray-800"]])}," 错误限制 ",2),e("div",Se,[e("div",Ve,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 每分钟错误限制 ",2),e("div",De,[l(e("input",{type:"number","onUpdate:modelValue":o[25]||(o[25]=r=>n.value.errorMinute=r),class:t(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.errorMinute]]),e("span",{class:t([s(a)?"text-gray-300":"text-gray-700"])},"分钟",2)])]),e("div",Ce,[e("label",{class:t(["block text-sm font-medium",[s(a)?"text-gray-300":"text-gray-700"]])}," 错误次数限制 ",2),e("div",Be,[l(e("input",{type:"number","onUpdate:modelValue":o[26]||(o[26]=r=>n.value.errorCount=r),class:t(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[s(a)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[i,n.value.errorCount]]),e("span",{class:t([s(a)?"text-gray-300":"text-gray-700"])},"次",2)])])])]),e("div",{class:"flex justify-end mt-8"},[e("button",{onClick:V,class:"px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"}," 保存设置 ")])])],2)]))}});export{Ae as default};