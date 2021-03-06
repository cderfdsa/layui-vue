/**
 *  kouchao 创建于 2017/11/28
 */
import '../static/css/layui.css'

import row from './components/layout/row'
import col from './components/layout/col'
import container from './components/layout/container'

import btn from './components/button/btn'
import btnGroup from './components/button/btn-group'

import form from './components/form/form'
import formItem from './components/form/form-item'
import radio from './components/form/radio'
import input from './components/form/input'
import checkbox from './components/form/checkbox'
import select from './components/form/select'
import textarea from './components/form/textarea'

import tabs from './components/tabs/tabs'
import tabPane from './components/tabs/tab-pane'

import hr from './components/auxiliary/hr'
import block from './components/auxiliary/block'

const layui = {
    config: {},
    install: function (Vue) {
        Vue.prototype.testLayui = function () {
            console.log('ok')
        }
        let components = [
            row,
            col,
            container,
            btn,
            btnGroup,
            form,
            formItem,
            radio,
            input,
            checkbox,
            select,
            textarea,
            tabs,
            tabPane,
            hr,
            block
        ]
        components.forEach(function (component) {
            Vue.component(component.name, component)
        })
        console.log('install layui ok')
    }
}

export default layui
