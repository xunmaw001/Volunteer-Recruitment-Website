
var projectName = '志愿者招募网站';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '组织信息',
	url: './pages/zuzhixinxi/list.html'
}, 
{
	name: '志愿活动',
	url: './pages/zhiyuanhuodong/list.html'
}, 

{
	name: '新闻资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/ssmj85gg/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除","导出"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["新增","查看","修改","删除"],"menu":"志愿组织","menuJump":"列表","tableName":"zhiyuanzuzhi"}],"menu":"志愿组织管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","删除","审核","查看评论"],"menu":"组织信息","menuJump":"列表","tableName":"zuzhixinxi"}],"menu":"组织信息管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","删除"],"menu":"组织申请","menuJump":"列表","tableName":"zuzhishenqing"}],"menu":"组织申请管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","删除","审核","查看评论"],"menu":"志愿活动","menuJump":"列表","tableName":"zhiyuanhuodong"}],"menu":"志愿活动管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","删除"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","删除","导出"],"menu":"活动打卡","menuJump":"列表","tableName":"huodongdaka"}],"menu":"活动打卡管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","删除"],"menu":"取消报名","menuJump":"列表","tableName":"quxiaobaoming"}],"menu":"取消报名管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","删除"],"menu":"通知公告","menuJump":"列表","tableName":"tongzhigonggao"}],"menu":"通知公告管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"新闻资讯","tableName":"news"},{"appFrontIcon":"cuIcon-goods","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","申请"],"menu":"组织信息列表","menuJump":"列表","tableName":"zuzhixinxi"}],"menu":"组织信息模块"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","报名"],"menu":"志愿活动列表","menuJump":"列表","tableName":"zhiyuanhuodong"}],"menu":"志愿活动模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看"],"menu":"组织申请","menuJump":"列表","tableName":"zuzhishenqing"}],"menu":"组织申请管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","取消报名"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看"],"menu":"活动打卡","menuJump":"列表","tableName":"huodongdaka"}],"menu":"活动打卡管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看"],"menu":"取消报名","menuJump":"列表","tableName":"quxiaobaoming"}],"menu":"取消报名管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","申请"],"menu":"组织信息列表","menuJump":"列表","tableName":"zuzhixinxi"}],"menu":"组织信息模块"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","报名"],"menu":"志愿活动列表","menuJump":"列表","tableName":"zhiyuanhuodong"}],"menu":"志愿活动模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","删除","查看评论"],"menu":"组织信息","menuJump":"列表","tableName":"zuzhixinxi"}],"menu":"组织信息管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","删除","审核"],"menu":"组织申请","menuJump":"列表","tableName":"zuzhishenqing"}],"menu":"组织申请管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["新增","查看","修改","删除","查看评论"],"menu":"志愿活动","menuJump":"列表","tableName":"zhiyuanhuodong"}],"menu":"志愿活动管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","删除","审核","活动打卡"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除"],"menu":"活动打卡","menuJump":"列表","tableName":"huodongdaka"}],"menu":"活动打卡管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","删除","审核"],"menu":"取消报名","menuJump":"列表","tableName":"quxiaobaoming"}],"menu":"取消报名管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除"],"menu":"通知公告","menuJump":"列表","tableName":"tongzhigonggao"}],"menu":"通知公告管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","申请"],"menu":"组织信息列表","menuJump":"列表","tableName":"zuzhixinxi"}],"menu":"组织信息模块"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","报名"],"menu":"志愿活动列表","menuJump":"列表","tableName":"zhiyuanhuodong"}],"menu":"志愿活动模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"志愿组织","tableName":"zhiyuanzuzhi"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
