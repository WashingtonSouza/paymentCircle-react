import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabContent'
import TabHeader from '../common/tab/tabHeader'


class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Payment Cycle' small='Register' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='List' icon='bars' target='tabList' />
              <TabHeader label='Add' icon='plus' target='tabAdd' />
              <TabHeader label='Edit' icon='pencil' target='tabEdit' />
              <TabHeader label='Delete' icon='trasg-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>

            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

export default BillingCycle