Search.setIndex({docnames:["autograd_grad_sample","compute_dp_sgd_privacy","dp_multihead_attention","index","per_sample_gradient_clip","privacy_analysis","privacy_engine","stats","tensor_utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["autograd_grad_sample.rst","compute_dp_sgd_privacy.rst","dp_multihead_attention.rst","index.rst","per_sample_gradient_clip.rst","privacy_analysis.rst","privacy_engine.rst","stats.rst","tensor_utils.rst"],objects:{"torchdp.autograd_grad_sample":{add_hooks:[0,1,1,""],disable_hooks:[0,1,1,""],enable_hooks:[0,1,1,""],is_supported:[0,1,1,""],remove_hooks:[0,1,1,""]},"torchdp.layers":{dp_multihead_attention:[2,0,0,"-"]},"torchdp.layers.dp_multihead_attention":{DPMultiheadAttention:[2,2,1,""],SequenceBias:[2,2,1,""]},"torchdp.layers.dp_multihead_attention.DPMultiheadAttention":{forward:[2,3,1,""],load_state_dict:[2,3,1,""]},"torchdp.layers.dp_multihead_attention.SequenceBias":{bias:[2,4,1,""],forward:[2,3,1,""]},"torchdp.per_sample_gradient_clip":{PerSampleGradientClipper:[4,2,1,""]},"torchdp.per_sample_gradient_clip.PerSampleGradientClipper":{clip_and_accumulate:[4,3,1,""],close:[4,3,1,""],pre_step:[4,3,1,""],set_on_batch_clip_func:[4,3,1,""]},"torchdp.privacy_analysis":{compute_rdp:[5,1,1,""],get_privacy_spent:[5,1,1,""]},"torchdp.privacy_engine":{PrivacyEngine:[6,2,1,""]},"torchdp.privacy_engine.PrivacyEngine":{attach:[6,3,1,""],detach:[6,3,1,""],get_privacy_spent:[6,3,1,""],step:[6,3,1,""],to:[6,3,1,""],virtual_step:[6,3,1,""]},"torchdp.scripts":{compute_dp_sgd_privacy:[1,0,0,"-"]},"torchdp.scripts.compute_dp_sgd_privacy":{compute_dp_sgd_privacy:[1,1,1,""]},"torchdp.utils":{stats:[7,0,0,"-"],tensor_utils:[8,0,0,"-"]},"torchdp.utils.stats":{Stat:[7,2,1,""],StatType:[7,2,1,""],add:[7,1,1,""],clear:[7,1,1,""],remove:[7,1,1,""],reset:[7,1,1,""],set_global_summary_writer:[7,1,1,""],update:[7,1,1,""]},"torchdp.utils.stats.Stat":{log:[7,3,1,""],reset:[7,3,1,""]},"torchdp.utils.tensor_utils":{calc_sample_norms:[8,1,1,""],sum_over_all_but_batch_and_last_n:[8,1,1,""]},torchdp:{autograd_grad_sample:[0,0,0,"-"],per_sample_gradient_clip:[4,0,0,"-"],privacy_analysis:[5,0,0,"-"],privacy_engine:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"0618":8,"0th":8,"100":1,"128":6,"2048":6,"256":1,"5117":8,"598":0,"60000":1,"class":[2,4,6,7],"default":[0,1,6,7],"enum":7,"final":4,"float":[1,5,6,7],"function":[0,1,2,4,5,6,7,8],"import":6,"int":[1,2,4,5,6,8],"return":[0,1,4,5,6,8],"true":[0,1,2,4,6,8],"while":[2,6],For:[2,6],Its:[5,7],That:6,The:[0,1,4,5,6,7],Then:6,Use:7,Used:6,Useful:7,about:7,acc1:7,acc1_valu:7,account:[1,6],accumul:[4,6,7],accuraci:7,achiev:4,across:7,activ:[0,7],add:[0,2,6,7],add_bias_kv:2,add_hook:0,add_scalar:7,add_zero_attn:2,added:[0,1,4,5,6,7],adding:[4,7],addit:5,advantag:6,affect:[4,7],after:[4,6],afterward:2,aggreg:[0,4,6,8],all:[0,2,4,5,6,7,8],alloc:6,allow:[2,7],alpha:[1,5,6],alreadi:7,altern:6,although:2,alwai:[0,4],amount:6,analysi:[1,3],ani:[6,7],anoth:7,appear:[0,4],appli:[1,4,5],arbitrari:6,arg:7,argument:6,around:7,arrai:5,assum:8,attach:[4,6,7],attn_mask:2,attribut:6,autograd:3,autograd_grad_sampl:0,automat:6,avail:0,averag:[4,6,7],avg:7,b_sz:4,back:4,backprop:0,backpropag:4,backward:[0,4,6],base:[0,1,2,5],batch:[0,1,2,4,6,8],batch_first:[0,4,6],batch_siz:[0,1,4,6],been:0,befor:[4,6],behaviour:0,being:[0,8],benefici:6,best:6,bia:2,blob:[1,5],block:2,bool:[0,1,4,6,8],both:2,bound:4,budget:[1,6],build:2,busi:6,calc_sample_norm:8,calcul:[2,8],call:[1,2,4,6,7],callabl:4,can:[0,1,4,5,6,7],cannot:4,captur:0,care:2,cat:4,check:0,clear:7,clip:[4,6,7],clip_and_accumul:4,clipper:[4,6],close:4,code:[1,5,7],collect:[4,7],com:[0,1,5],command:1,common:7,compon:6,comput:[0,2,3,4,5,6],compute_accuraci:7,compute_dp_sgd_privaci:1,compute_rdp:5,constant:6,constraint:4,consum:6,consumpt:6,contain:6,contrast:2,contribut:0,convert:6,correct:0,correspond:[0,4,6],could:[4,7],cover:7,cpu:6,creat:7,criterion:6,cuda:6,current:[0,2,7],cybertronai:0,dataload:6,dataset:[1,6],defin:[2,4,6],delta:[1,5,6],depend:5,detach:6,determin:0,deviat:[1,5,6],devic:6,dict:7,dictionari:7,differ:4,differenti:[4,5,6,7],dim:8,dimens:[0,2,4,6,8],directli:[6,7],disabl:0,disable_hook:0,discard:6,displai:7,doc:6,doe:6,don:7,dp_multihead_attent:2,dpmultiheadattent:3,dropout:2,dtype:5,dure:[0,7],each:[4,6,8],easier:7,effect:6,effici:6,element:2,els:[0,4,6],embed:2,embed_dim:2,enabl:[0,1,6],enable_hook:0,encapsul:4,end:2,engin:[2,4,6],ensur:[4,6],enter:1,entir:4,enumer:6,epoch:[1,6],epsilon:[1,5,6,7],equal:5,eras:6,estim:1,etc:7,everi:[2,6,7],evolv:7,exampl:[0,1,2,4,5,6,7,8],except:8,exclud:8,exist:7,extern:7,fals:[0,2,4],far:6,field:[4,6],file:7,find:1,first:[0,4,6,8],fit:6,flag:[0,4,6,8],flat:[4,8],flatten:4,follow:[4,6,7],former:2,forward:[0,2],frequenc:7,friendli:2,from:[0,1,2,4,6,7,8],full:2,gather:7,gaussian:[1,4,5,6],gener:[7,8],get:[4,6,7],get_privacy_sp:[5,6],github:[0,1,5],given:[5,7,8],global:[0,7],googl:[1,5],gpu:6,grad:[3,4],grad_norm_typ:6,grad_sampl:[0,4,6],gradient:[0,2,4,6,7],greater:[1,4,6],guarante:[5,6],hack:0,handl:6,has:[0,2,4,6],have:[2,4,5,6,7],here:[4,5,6],higher:6,hook:[0,2,4],how:[6,7],howev:0,html:[2,6],http:[0,1,2,5,6],idea:6,identifi:7,ignor:[2,8],imagin:6,implement:[0,2,7],impli:[0,4],index:3,indic:[0,4,6],inf:5,init:6,initi:[2,6],inject:6,input:[0,1,2,4,6,8],insid:[6,7],insight:7,instal:0,instanc:[2,6,7],instanti:[6,7],instead:[2,7],interfac:7,intern:[2,7],involv:4,is_support:0,issu:0,iter:[1,5,6,7,8],its:4,itself:6,just:[4,7],kdim:2,keep:[4,6,8],kei:2,key_padding_mask:2,known:0,larg:6,larger:6,last:[6,8],later:[6,7],latter:2,layer:[0,2,4,6,8],learnabl:2,length:[2,5,8],leverag:2,librari:0,like:7,line:[1,6,7],linear:6,list:[1,5,6,8],load:2,load_state_dict:2,locat:7,log:7,logit:6,loss:[0,1,4,6,7],loss_reduct:[0,4,6],main:[6,7],mainli:1,make:4,master:[1,5],match:4,max_grad_norm:6,max_ord:5,maximum:[4,6],mean:[0,4,6,7],mechan:[1,4,5],memori:6,meter:7,method:6,metric:7,might:6,mini:[4,6],misc_set:6,model:[0,1,4,6],modul:[0,2,3,4,6],monitor:7,monkeypatch:6,most:4,move:6,multiheadattent:2,multipl:5,n_dim:8,n_total_param:4,name:[7,8],named_param:8,named_valu:7,namespac:7,need:[0,2,6,7],need_weight:2,never:6,next:6,nois:[1,4,5,6,7],noise_multipli:[1,5,6],none:[2,4,6,7],norm:[4,6,7,8],norm_clipp:4,normal:4,normclipp:4,note:[0,4,5,6],now:[0,6],num_head:2,number:[1,5,8],nxb:6,object:[4,6,7],observ:7,on_batch_clip_func:4,onc:7,one:[2,7],ones:[7,8],onli:[0,4,6,7],oper:[0,4,6],opt_ord:5,optim:[1,4,5,6],option:[1,6,7],order:[1,5,6],org:[2,6],origin:[2,6],original_step:6,other:[6,7],out:7,output:2,over:[4,8],overal:8,overridden:2,page:3,pair:[1,5,6],param:[0,8],paramet:[0,1,2,4,5,6,7,8],parameter:4,pass:[0,2,4,7],per:[0,2,4,6],per_sample_gradient_clip:4,perform:[1,2],persamplegradientclipp:3,pleas:2,pointer:6,popul:4,pre_step:4,prepar:4,previous:2,print:[1,2],prior:4,privaci:[3,4,6,7],privacy_analysi:5,privacy_engin:[4,6],privacyengin:[3,4],process:[1,4,7],proper:7,properli:7,provid:[0,4,7],put:4,python:[1,5],pytorch:[0,2,6],q_1:5,q_k:5,queri:[2,6],rais:[1,5,6],rand:8,randn:2,rang:[5,6,7],rate:[1,5],rather:6,ratio:[1,5,6],rdp:[1,5,6],rdp_account:5,real:4,recip:2,reduct:[0,4,6,7],refer:2,regist:2,register_backward_hook:0,remov:[0,4,6,7],remove_hook:0,renyi:5,repeat:4,repeatedli:6,replac:4,report:7,repres:[0,4,6],reset:7,respect:4,result:[1,7],right:6,rough:6,row:4,run:[2,5,6],same:5,sampl:[1,2,3,4,5,6,7,8],sample_s:[1,6],sample_stat:7,satisfi:1,save:[0,2],scalar:5,scale:4,script:1,scriptmodul:2,search:3,second:[0,4],see:[2,6,7],sensit:[1,4,5,6],sequenc:2,sequencebia:2,set:[0,4,6,7,8],set_global_summary_writ:7,set_on_batch_clip_func:4,sgd:[3,6],sgm:5,shape:[0,2,4,8],share:2,should:[2,4,6],show:6,shown:7,sigma:5,sigma_1:5,sigma_k:5,silent:2,similar:7,sinc:2,singl:4,size:[1,2,4,6,8],slice:4,smaller:[4,6],some:7,sourc:[0,1,2,4,5,6,7,8],spent:6,stabl:6,standard:[1,5,6],stat:[3,4,8],stat_typ:7,state:[2,6],state_dict:2,statist:[4,7],stattyp:7,step:[1,4,5,6],steps_1:5,steps_k:5,stop:7,store:[4,6],str:[0,4,6,7,8],strategi:[4,7],string:8,subclass:2,suggest:0,sum:[0,4,6,8],sum_over_all_but_batch_and_last_n:8,summary_writ:7,summarywrit:7,suppli:7,support:[0,2,7],suppos:5,sure:4,take:[0,2,4,6],target:[1,5,6],target_delta:6,tensor:[0,3,4,6],tensor_attribut:6,tensor_util:8,tensorboard:7,tensorflow:[1,5],tensorflow_privaci:[1,5],test:7,than:[1,4,6],thei:4,them:[0,2,4,7],thi:[0,1,2,4,5,6,7,8],thing:7,threshold:4,thu:[4,6],time:[4,5,6,7],togeth:[4,6],too:6,top:4,torch:[2,4,6,8],torchdp:[0,1,2,4,5,6,7,8],total:4,track:0,train:[1,6,7],tupl:[1,4,5,6,8],tutori:2,type:[0,1,2,4,5,6,7,8],under:[4,7],union:6,uniqu:7,unnecessarili:7,unsupport:6,updat:[5,7],usag:6,use:7,used:[4,7],using:[0,7],usual:6,util:[3,4,7],val:7,valid:[6,7],valu:[0,2,4,5,6,7],valueerror:[1,5,6],vdim:2,vector:4,verbos:1,veri:0,verifi:0,view:7,virtual:6,virtual_step:6,visual:7,wai:0,want:[6,7],weight:6,welcom:0,were:4,what_is_state_dict:2,when:[1,4,5,6,8],whenev:6,where:[2,4,7,8],whether:0,which:[0,1,4,5,6],wish:5,within:2,without:4,work:4,would:[5,6],wrapper:7,you:[1,4,6,7],your:[0,6,7],zero:8,zero_grad:6,zeros_lik:5},titles:["Autograd Grad Sample","Compute DP-SGD Privacy","DPMultiheadAttention","PyTorch-DP API Reference","PerSampleGradientClipper","Privacy Analysis","PrivacyEngine","Stats","Tensor Utils"],titleterms:{analysi:5,api:3,autograd:0,comput:1,dpmultiheadattent:2,grad:0,indic:3,persamplegradientclipp:4,privaci:[1,5],privacyengin:6,pytorch:3,refer:3,sampl:0,sgd:1,stat:7,tabl:3,tensor:8,util:8}})