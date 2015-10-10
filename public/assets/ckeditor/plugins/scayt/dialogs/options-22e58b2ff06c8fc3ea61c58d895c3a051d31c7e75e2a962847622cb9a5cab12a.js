CKEDITOR.dialog.add("scaytDialog",function(t){var e=t.scayt,i='<p><img src="'+e.getLogo()+'" /></p><p>'+e.getLocal("version")+e.getVersion()+"</p><p>"+e.getLocal("text_copyrights")+"</p>",n=CKEDITOR.document,a={isChanged:function(){return null===this.newLang||this.currentLang===this.newLang?!1:!0},currentLang:e.getLang(),newLang:null,reset:function(){this.currentLang=e.getLang(),this.newLang=null},id:"lang"},i=[{id:"options",label:e.getLocal("tab_options"),onShow:function(){},elements:[{type:"vbox",id:"scaytOptions",children:function(){var t,i=e.getApplicationConfig(),n=[],a={"ignore-all-caps-words":"label_allCaps","ignore-domain-names":"label_ignoreDomainNames","ignore-words-with-mixed-cases":"label_mixedCase","ignore-words-with-numbers":"label_mixedWithDigits"};for(t in i){var o={type:"checkbox"};o.id=t,o.label=e.getLocal(a[t]),n.push(o)}return n}(),onShow:function(){this.getChild();for(var e=t.scayt,i=0;i<this.getChild().length;i++)this.getChild()[i].setValue(e.getApplicationConfig()[this.getChild()[i].id])}}]},{id:"langs",label:e.getLocal("tab_languages"),elements:[{id:"leftLangColumn",type:"vbox",align:"left",widths:["100"],children:[{type:"html",id:"langBox",style:"overflow: hidden; white-space: normal;",html:'<div><div style="float:left;width:45%;margin-left:5px;" id="left-col-'+t.name+'"></div><div style="float:left;width:45%;margin-left:15px;" id="right-col-'+t.name+'"></div></div>',onShow:function(){var e=t.scayt.getLang();n.getById("scaytLang_"+e).$.checked=!0}}]}]},{id:"dictionaries",label:e.getLocal("tab_dictionaries"),elements:[{type:"vbox",id:"rightCol_col__left",children:[{type:"html",id:"dictionaryNote",html:""},{type:"text",id:"dictionaryName",label:e.getLocal("label_fieldNameDic")||"Dictionary name",onShow:function(e){var i=e.sender,n=t.scayt;setTimeout(function(){i.getContentElement("dictionaries","dictionaryNote").getElement().setText(""),null!=n.getUserDictionaryName()&&""!=n.getUserDictionaryName()&&i.getContentElement("dictionaries","dictionaryName").setValue(n.getUserDictionaryName())},0)}},{type:"hbox",id:"notExistDic",align:"left",style:"width:auto;",widths:["50%","50%"],children:[{type:"button",id:"createDic",label:e.getLocal("btn_createDic"),title:e.getLocal("btn_createDic"),onClick:function(){var e=this.getDialog(),i=o,n=t.scayt,a=e.getContentElement("dictionaries","dictionaryName").getValue();n.createUserDictionary(a,function(n){n.error||i.toggleDictionaryButtons.call(e,!0),n.dialog=e,n.command="create",n.name=a,t.fire("scaytUserDictionaryAction",n)},function(i){i.dialog=e,i.command="create",i.name=a,t.fire("scaytUserDictionaryActionError",i)})}},{type:"button",id:"restoreDic",label:e.getLocal("btn_restoreDic"),title:e.getLocal("btn_restoreDic"),onClick:function(){var e=this.getDialog(),i=t.scayt,n=o,a=e.getContentElement("dictionaries","dictionaryName").getValue();i.restoreUserDictionary(a,function(i){i.dialog=e,i.error||n.toggleDictionaryButtons.call(e,!0),i.command="restore",i.name=a,t.fire("scaytUserDictionaryAction",i)},function(i){i.dialog=e,i.command="restore",i.name=a,t.fire("scaytUserDictionaryActionError",i)})}}]},{type:"hbox",id:"existDic",align:"left",style:"width:auto;",widths:["50%","50%"],children:[{type:"button",id:"removeDic",label:e.getLocal("btn_deleteDic"),title:e.getLocal("btn_deleteDic"),onClick:function(){var e=this.getDialog(),i=t.scayt,n=o,a=e.getContentElement("dictionaries","dictionaryName"),r=a.getValue();i.removeUserDictionary(r,function(i){a.setValue(""),i.error||n.toggleDictionaryButtons.call(e,!1),i.dialog=e,i.command="remove",i.name=r,t.fire("scaytUserDictionaryAction",i)},function(i){i.dialog=e,i.command="remove",i.name=r,t.fire("scaytUserDictionaryActionError",i)})}},{type:"button",id:"renameDic",label:e.getLocal("btn_renameDic"),title:e.getLocal("btn_renameDic"),onClick:function(){var e=this.getDialog(),i=t.scayt,n=e.getContentElement("dictionaries","dictionaryName").getValue();i.renameUserDictionary(n,function(i){i.dialog=e,i.command="rename",i.name=n,t.fire("scaytUserDictionaryAction",i)},function(i){i.dialog=e,i.command="rename",i.name=n,t.fire("scaytUserDictionaryActionError",i)})}}]},{type:"html",id:"dicInfo",html:'<div id="dic_info_editor1" style="margin:5px auto; width:95%;white-space:normal;">'+e.getLocal("text_descriptionDic")+"</div>"}]}]},{id:"about",label:e.getLocal("tab_about"),elements:[{type:"html",id:"about",style:"margin: 5px 5px;",html:'<div><div id="scayt_about_">'+i+"</div></div>"}]}];t.on("scaytUserDictionaryAction",function(t){var e,i=SCAYT.prototype.UILib,n=t.data.dialog,a=n.getContentElement("dictionaries","dictionaryNote").getElement(),o=t.editor.scayt;void 0===t.data.error?(e=o.getLocal("message_success_"+t.data.command+"Dic"),e=e.replace("%s",t.data.name),a.setText(e),i.css(a.$,{color:"blue"})):(""===t.data.name?a.setText(o.getLocal("message_info_emptyDic")):(e=o.getLocal("message_error_"+t.data.command+"Dic"),e=e.replace("%s",t.data.name),a.setText(e)),i.css(a.$,{color:"red"}),null!=o.getUserDictionaryName()&&""!=o.getUserDictionaryName()?n.getContentElement("dictionaries","dictionaryName").setValue(o.getUserDictionaryName()):n.getContentElement("dictionaries","dictionaryName").setValue(""))}),t.on("scaytUserDictionaryActionError",function(t){var e,i=SCAYT.prototype.UILib,n=t.data.dialog,a=n.getContentElement("dictionaries","dictionaryNote").getElement(),o=t.editor.scayt;""===t.data.name?a.setText(o.getLocal("message_info_emptyDic")):(e=o.getLocal("message_error_"+t.data.command+"Dic"),e=e.replace("%s",t.data.name),a.setText(e)),i.css(a.$,{color:"red"}),null!=o.getUserDictionaryName()&&""!=o.getUserDictionaryName()?n.getContentElement("dictionaries","dictionaryName").setValue(o.getUserDictionaryName()):n.getContentElement("dictionaries","dictionaryName").setValue("")});var o={title:e.getLocal("text_title"),resizable:CKEDITOR.DIALOG_RESIZE_BOTH,minWidth:340,minHeight:260,onLoad:function(){if(0!=t.config.scayt_uiTabs[1]){var e=o,i=e.getLangBoxes.call(this);i.getParent().setStyle("white-space","normal"),e.renderLangList(i),this.definition.minWidth=this.getSize().width,this.resize(this.definition.minWidth,this.definition.minHeight)}},onCancel:function(){a.reset()},onHide:function(){t.unlockSelection()},onShow:function(){if(t.fire("scaytDialogShown",this),0!=t.config.scayt_uiTabs[2]){var e=t.scayt,i=this.getContentElement("dictionaries","dictionaryName"),n=this.getContentElement("dictionaries","existDic").getElement().getParent(),a=this.getContentElement("dictionaries","notExistDic").getElement().getParent();n.hide(),a.hide(),null!=e.getUserDictionaryName()&&""!=e.getUserDictionaryName()?(this.getContentElement("dictionaries","dictionaryName").setValue(e.getUserDictionaryName()),n.show()):(i.setValue(""),a.show())}},onOk:function(){var e=o,i=t.scayt;this.getContentElement("options","scaytOptions"),e=e.getChangedOption.call(this),i.commitOption({changedOptions:e})},toggleDictionaryButtons:function(t){var e=this.getContentElement("dictionaries","existDic").getElement().getParent(),i=this.getContentElement("dictionaries","notExistDic").getElement().getParent();t?(e.show(),i.hide()):(e.hide(),i.show())},getChangedOption:function(){var e={};if(1==t.config.scayt_uiTabs[0])for(var i=this.getContentElement("options","scaytOptions").getChild(),n=0;n<i.length;n++)i[n].isChanged()&&(e[i[n].id]=i[n].getValue());return a.isChanged()&&(e[a.id]=t.config.scayt_sLang=a.currentLang=a.newLang),e},buildRadioInputs:function(e,i){var n=new CKEDITOR.dom.element("div");CKEDITOR.document.createElement("div");var o="scaytLang_"+i,r=CKEDITOR.dom.element.createFromHtml('<input id="'+o+'" type="radio"  value="'+i+'" name="scayt_lang" />'),c=new CKEDITOR.dom.element("label"),l=t.scayt;return n.setStyles({"white-space":"normal",position:"relative","padding-bottom":"2px"}),r.on("click",function(t){a.newLang=t.sender.getValue()}),c.appendText(e),c.setAttribute("for",o),n.append(r),n.append(c),i===l.getLang()&&(r.setAttribute("checked",!0),r.setAttribute("defaultChecked","defaultChecked")),n},renderLangList:function(i){var n,a=i.find("#left-col-"+t.name).getItem(0),i=i.find("#right-col-"+t.name).getItem(0),o=e.getLangList(),r={},c=[],l=0;for(n in o.ltr)r[n]=o.ltr[n];for(n in o.rtl)r[n]=o.rtl[n];for(n in r)c.push([n,r[n]]);for(c.sort(function(t,e){var i=0;return t[1]>e[1]?i=1:t[1]<e[1]&&(i=-1),i}),r={},o=0;o<c.length;o++)r[c[o][0]]=c[o][1];c=Math.round(c.length/2);for(n in r)l++,this.buildRadioInputs(r[n],n).appendTo(c>=l?a:i)},getLangBoxes:function(){return this.getContentElement("langs","langBox").getElement()},contents:function(t,e){var i=[],n=e.config.scayt_uiTabs;if(!n)return t;for(var a in n)1==n[a]&&i.push(t[a]);return i.push(t[t.length-1]),i}(i,t)};return o});