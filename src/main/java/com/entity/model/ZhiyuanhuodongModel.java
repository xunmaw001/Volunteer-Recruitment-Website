package com.entity.model;

import com.entity.ZhiyuanhuodongEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;
import java.io.Serializable;
 

/**
 * 志愿活动
 * 接收传参的实体类  
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了） 
 * 取自ModelAndView 的model名称
 * @author 
 * @email 
 * @date 2022-03-18 17:36:25
 */
public class ZhiyuanhuodongModel  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 活动名称
	 */
	
	private String huodongmingcheng;
		
	/**
	 * 活动地点
	 */
	
	private String huodongdidian;
		
	/**
	 * 活动介绍
	 */
	
	private String huodongjieshao;
		
	/**
	 * 开始时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date kaishishijian;
		
	/**
	 * 活动时长
	 */
	
	private String huodongshizhang;
		
	/**
	 * 活动状态
	 */
	
	private String huodongzhuangtai;
		
	/**
	 * 活动图片
	 */
	
	private String huodongtupian;
		
	/**
	 * 组织编号
	 */
	
	private String zuzhibianhao;
		
	/**
	 * 组织名称
	 */
	
	private String zuzhimingcheng;
		
	/**
	 * 是否审核
	 */
	
	private String sfsh;
		
	/**
	 * 审核回复
	 */
	
	private String shhf;
		
	/**
	 * 最近点击时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date clicktime;
		
	/**
	 * 点击次数
	 */
	
	private Integer clicknum;
				
	
	/**
	 * 设置：活动名称
	 */
	 
	public void setHuodongmingcheng(String huodongmingcheng) {
		this.huodongmingcheng = huodongmingcheng;
	}
	
	/**
	 * 获取：活动名称
	 */
	public String getHuodongmingcheng() {
		return huodongmingcheng;
	}
				
	
	/**
	 * 设置：活动地点
	 */
	 
	public void setHuodongdidian(String huodongdidian) {
		this.huodongdidian = huodongdidian;
	}
	
	/**
	 * 获取：活动地点
	 */
	public String getHuodongdidian() {
		return huodongdidian;
	}
				
	
	/**
	 * 设置：活动介绍
	 */
	 
	public void setHuodongjieshao(String huodongjieshao) {
		this.huodongjieshao = huodongjieshao;
	}
	
	/**
	 * 获取：活动介绍
	 */
	public String getHuodongjieshao() {
		return huodongjieshao;
	}
				
	
	/**
	 * 设置：开始时间
	 */
	 
	public void setKaishishijian(Date kaishishijian) {
		this.kaishishijian = kaishishijian;
	}
	
	/**
	 * 获取：开始时间
	 */
	public Date getKaishishijian() {
		return kaishishijian;
	}
				
	
	/**
	 * 设置：活动时长
	 */
	 
	public void setHuodongshizhang(String huodongshizhang) {
		this.huodongshizhang = huodongshizhang;
	}
	
	/**
	 * 获取：活动时长
	 */
	public String getHuodongshizhang() {
		return huodongshizhang;
	}
				
	
	/**
	 * 设置：活动状态
	 */
	 
	public void setHuodongzhuangtai(String huodongzhuangtai) {
		this.huodongzhuangtai = huodongzhuangtai;
	}
	
	/**
	 * 获取：活动状态
	 */
	public String getHuodongzhuangtai() {
		return huodongzhuangtai;
	}
				
	
	/**
	 * 设置：活动图片
	 */
	 
	public void setHuodongtupian(String huodongtupian) {
		this.huodongtupian = huodongtupian;
	}
	
	/**
	 * 获取：活动图片
	 */
	public String getHuodongtupian() {
		return huodongtupian;
	}
				
	
	/**
	 * 设置：组织编号
	 */
	 
	public void setZuzhibianhao(String zuzhibianhao) {
		this.zuzhibianhao = zuzhibianhao;
	}
	
	/**
	 * 获取：组织编号
	 */
	public String getZuzhibianhao() {
		return zuzhibianhao;
	}
				
	
	/**
	 * 设置：组织名称
	 */
	 
	public void setZuzhimingcheng(String zuzhimingcheng) {
		this.zuzhimingcheng = zuzhimingcheng;
	}
	
	/**
	 * 获取：组织名称
	 */
	public String getZuzhimingcheng() {
		return zuzhimingcheng;
	}
				
	
	/**
	 * 设置：是否审核
	 */
	 
	public void setSfsh(String sfsh) {
		this.sfsh = sfsh;
	}
	
	/**
	 * 获取：是否审核
	 */
	public String getSfsh() {
		return sfsh;
	}
				
	
	/**
	 * 设置：审核回复
	 */
	 
	public void setShhf(String shhf) {
		this.shhf = shhf;
	}
	
	/**
	 * 获取：审核回复
	 */
	public String getShhf() {
		return shhf;
	}
				
	
	/**
	 * 设置：最近点击时间
	 */
	 
	public void setClicktime(Date clicktime) {
		this.clicktime = clicktime;
	}
	
	/**
	 * 获取：最近点击时间
	 */
	public Date getClicktime() {
		return clicktime;
	}
				
	
	/**
	 * 设置：点击次数
	 */
	 
	public void setClicknum(Integer clicknum) {
		this.clicknum = clicknum;
	}
	
	/**
	 * 获取：点击次数
	 */
	public Integer getClicknum() {
		return clicknum;
	}
			
}
