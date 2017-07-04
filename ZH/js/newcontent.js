/**
 * Created by Administrator on 2017/6/26.
 */
//创建左侧导航 json
$(function () {
    init();
})

//定义初始化方法
function init(){
    //初始化菜单
    initMenu();

}
function initMenu(){
    $.ajax({
        //async:false,
        type:"GET",
        //菜单所引用的JSON菜单
        //后期更改为动态json源
        url:"js/newmenu.json",
        dataType:"json",
        success:function(iJson){
            addParentMenu(iJson);
        },
        error:function(){
            alert("error");
        },
        complete:function(){

        }
    });


}

function addParentMenu(data){
    //加载父类节点即一级菜单
    var boxnew="";
    $.each(data,function(i,n){
        //保存数据
		
        if(i>=0) {
            // alert("成功！ i :" + i);
            $('#newlist').accordion('add', {
//              title: n.text,
//              iconCls: n.iconCls,
                //collapsible:true,
                selected: true,
                //content: '<li="' + n.text + '"></ul>'
                boxnew+='<div class="newlistleft">';
                boxnew+='<span>'+n.time+'</span>';
                boxnew+='<p>'+n.month+'</p>';
                boxnew+='</div>';
                boxnew+='<div class="newlistright">';
                boxnew+='<a href="#">'+n.title+'</a>';
                boxnew+='</div>';
                boxnew+='</li>';
                //content:'<div title=="' + n.text + '"><ul class="easyui-datalist" data-options="border:false,fit:true"><li>企业文化</li></ul></div>'
            });
            $('#newlist').accordion({

                onSelect:function(title,index){
                    //alert("选中的title:" + title);
                    $("ul[name='" + n.text + "']").tree({
                        data:n.children,
                        queryParams:{
                            text:title
                        },
                        animate:true,
                        //显示虚线效果
                        //lines:true,
                        //在用户点击一个子节点 ,即二级菜单时触发addTab()方法，用于添加tabs
                        onClick:function(node){
                            //判断url是否存在，存在则创建tabs
                            if(node.url){
                                // addTab(node);
                            }
                        }

                    })

                }
            })
        }

    });



}



function addTab(subtitle, url, icon) {

    if (!$('#tabs').tabs('exists', subtitle)) {
        //var content = '<iframe scrolling="auto" src="' + url + '"></iframe>';
        $('#tabs').tabs('add', {
            title: subtitle,
            href: url,
            //content:content,
            iconCls: icon,
            closable: true,
            loadingMessage: '正在加载中......'
        });
    } else {
        $('#tabs').tabs('select', subtitle);
    }
}