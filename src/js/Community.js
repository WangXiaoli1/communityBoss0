import React, { Component } from 'react';
import '../css/Community.css';
import { Input,Icon } from 'antd';
import $ from 'jquery';
import '../css/reset.css';
class Community extends Component{
    componentDidMount = function () {
        // 下拉
        let bool=true
        $('.zxs-hd-addin-li-p').click(function () {
            $('.zxs-hd-success').stop().hide();
            if(bool){
                $(this).parent().children(1).stop().slideDown('slow');
            }else{
                $('.zxs-hd-addin-li-ul').stop().slideUp('slow');
            }
            bool=!bool

        });

        $('.zxs-hd-connect').click(function(){
            $('.zxs-hd-addin-li-ul').stop().slideUp('fast');
            $('.zxs-hd-success').stop().show();
            bool=!bool

        })

    };

    render(){
        return <div className="community_wrap">
            <h1>爱&nbsp;家</h1>
                <div className="Community_title">
                    <select>
                        <option>星河皓月小区</option>
                        <option>德馨家园小区</option>
                        <option>天宫院小区</option>
                        <option>意华小区</option>
                        <option>东方夏威夷小区</option>
                    </select>
                    <span>选择小区</span>
                </div>

                <div className="zxs-hd-wrap">
                    {/*物业人员添加 start*/}
                    <div className="zxs-hd-add">
                        <ul className="zxs-hd-addin">
                            <li className="zxs-hd-addin-li">
                                <p className="zxs-hd-addin-li-p"><Icon type="usergroup-add" />物业人员添加</p>
                                <ul className="zxs-hd-addin-li-ul">
                                    <li><Input placeholder="姓名" /></li>
                                    <li><Input placeholder="性别" /></li>
                                    <li><Input placeholder="年龄" /></li>
                                    <li><Input placeholder="联系方式" /></li>
                                    <li>
                                        <button className="zxs-hd-connect">确认添加</button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/*物业人员添加 end*/}

                    {/*添加成功*/}
                    <div className="zxs-hd-success">
                        <Icon type="check-circle-o" /> 添加成功！<br/>
                    </div>
                    {/*添加成功end*/}

                    {/*所有物业人员 start*/}
                    <div className="zxs-hd-all"><Icon type="team" /> 所有物业人员</div>
                    <div className="zxs-hd-table">
                        <p className="zxs-hd-name">姓名：赵晓姝</p>
                        <div className="zxs-hd-card">
                            <p>性别：女</p>
                            <p>年龄：18</p>
                            <p>联系方式：13663428487</p>
                        </div>
                    </div>
                    <div className="zxs-hd-table">
                        <p className="zxs-hd-name">姓名：王小立</p>
                        <div className="zxs-hd-card">
                            <p>性别：女</p>
                            <p>年龄：18</p>
                            <p>联系方式：13663428487</p>
                        </div>
                    </div>
                    {/*所有物业人员 end*/}
            </div>

            </div>
    }
}
export default Community;
