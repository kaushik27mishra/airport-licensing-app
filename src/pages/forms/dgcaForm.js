import React, {Component} from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Announced } from 'office-ui-fabric-react/lib/Announced';
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  SelectionMode,
  IColumn,
} from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

//style
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

export default class dgcaForm extends Component {

    constructor(props) {
        super(props);
    
        this._selection = new Selection({
          onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() }),
        });
    
        // Populate with items for demos.
        this._allItems = [];
        for (let i = 0; i < 200; i++) {
          this._allItems.push({
            key: i,
            name: 'Item ' + i,
            value: i,
          });
        }
    
        this._columns = [
          { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
          { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
          { key: 'column3', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
          { key: 'column4', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
        ];
    
        this.state = {
          items: this._allItems,
          selectionDetails: this._getSelectionDetails(),
        };
    }

    render() {
      const { items, selectionDetails } = this.state;

      return (
              <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                  <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                      <Card styles={styles.cardStyles}>
                          <Card.Section>
                              <Fabric>
                                  <MarqueeSelection selection={this._selection}>
                                  <DetailsList
                                      items={items}
                                      columns={this._columns}
                                      setKey="set"
                                      layoutMode={DetailsListLayoutMode.justified}
                                      selection={this._selection}
                                      selectionPreservedOnEmptyClick={true}
                                      ariaLabelForSelectionColumn="Toggle selection"
                                      ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                                      checkButtonAriaLabel="Row checkbox"
                                      onItemInvoked={this._onItemInvoked}
                                  />
                                  </MarqueeSelection>
                              </Fabric>
                          </Card.Section>
                      </Card>
                  </div>
              </div>
            );
    } 
}



