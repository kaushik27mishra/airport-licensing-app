import React, {Component} from 'react';

import { Text } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const styles = {
    cardStyles: {
        root: {
          background: 'white',
          paddingTop: 30,
          paddingLeft: 50,
          paddingRight: 50,
          paddingBottom: 50,
          width: '100%',
          maxWidth: '100%',
          margin: 'auto',
          marginTop: 60,
        }
    }
}

const classNames = mergeStyleSets({
    pivot: {
        margin: 'auto',
    }
});

class HistoryPage extends Component{
    render(){
        return(
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                <Card styles={styles.cardStyles}>
                    <Card.Section>
                            <Text variant={'xxLarge'}>History</Text>

                    </Card.Section>
                </Card>
            </div>
        </div>
        );
    }
}
export default HistoryPage;