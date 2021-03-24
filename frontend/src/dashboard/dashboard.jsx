import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'


class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Dashboard' small='Version 1.0' />
        <Content>
          <ValueBox cols='12 4' color='green' icon='bank' value='10' text='Credits amount' />
          <ValueBox cols='12 4' color='red' icon='credit-card' value='10' text='Debt amount' />
          <ValueBox cols='12 4' color='blue' icon='money' value='R$ 0' text='Consolited amount' />
        </Content>
      </div>
    )
  }
}

export default Dashboard