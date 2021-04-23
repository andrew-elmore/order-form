import {
    initializeBlock,
    useBase,
    useRecords,
    useGlobalConfig,
    useLoadable,
    useWatchable,
    useRecordById,
    TablePicker
} from '@airtable/blocks/ui';
import { Grid, Button } from '@material-ui/core'
import ProductDataForm from './ProductDataForm'
import NutriFacts from './NutriFacts'
import FormatData from './FormatData'
import CertificationData from './CertificationData'
import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
    Object.freeze(state)
    let currentState = Object.assign({}, state)
    switch (action.type) {
        case 'seeState':
            console.log(state)
        case 'UPDATE':
            console.log(currentState)
            return {...currentState, ['data']: {...currentState.data, [action.payload.field]: action.payload.value}}
        case 'RESET':
            return action.payload
        default:
            return state
    }
}

function DataInput() {
    const defaultState = {
        data: {
            "TL_ID2": '',
            "ENTERED_BY": '',
            "?UPDATED_PRODS": '',
            "UPDATED_INFO": '',
            "AUDIT": '',
            "LABEL_TYPE": '',
            "CODE_TYPE": '',
            "NOTES": '',
            "?SUPPLIER_ID": '',
            "?NUTRI": '',
            "CATEGORY": '',
            "?NEW_FORMAT": '',
            "F_SIZE": '',
            "?OGSRT": '',
            "?%_FT": '',
            "WG_LOGO": '',
            "COUNTRY": '',
            "PROP_65": '',
            "BIOENG": '',
            "DISTB": '',
            "DISTB_ID": '',
            "BRAND": '',
            "PRODUCT": '',
            "PRODUCT_LINE_1": '',
            "PRODUCT_LINE_2": '',
            "PRODUCT_LINE_3": '',
            "?SELL_PT": '',
            "?DISTB_BY": '',
            "INFO_SOURCE": '',
            "?SELL_PTS_SRF": '',
            "DISCO": '',
            "DISCO_DATE": '',
            "INGREDIENTS": '',
            "ING_ONLY": '',
            "ALLERGEN_VENDOR": '',
            "COOKING_INSTR": '',
            "?CERT_STATEMENT": '',
            "?OG_NGMO_CERT": '',
            "OG_CERT_EXP": '',
            "NGMO_CERT": '',
            "?NGMO_EXP": '',
            "SERV_SIZE": '',
            "SERV_SIZE_1": '',
            "SERV_SIZE_2": '',
            "CALORIES": '',
            "TOTAL_FAT": '',
            "SAT_FAT": '',
            "TRANS_FAT": '',
            "CHOLEST_MG": '',
            "SODIUM_MG": '',
            "TOTAL_CARB": '',
            "FIBER": '',
            "TOTAL_SUGAR": '',
            "ADDED_SUGAR": '',
            "PROTEIN": '',
            "VIT_D_MCG": '',
            "CALCIUM_MG": '',
            "IRON_MG": '',
            "POTASS_MG": '',
            "CAL_FAT": '',
            "DV_VIT_A": '',
            "DV_VIT_C": '',
            "DV_FAT": '',
            "DV_SAT_FAT": '',
            "DV_SODIUM": '',
            "DV_CARB": '',
            "DV_FIBER": '',
            "DV_SUGAR": '',
            "VIT_D": '',
            "CALCIUM": '',
            "IRON": '',
            "POTASS": '',
        },
        errors: {

        },
    }
    const [state, dispatch] = useReducer(reducer,  defaultState )


    const base = useBase();
    const globalConfig = useGlobalConfig();
    const defaultTable = base.tables[0]

    const [tableName, setTableName] = useState(defaultTable.name);
    const table = base.getTableByNameIfExists(tableName);

    const handelSubmit = async() => {
        await table.createRecordAsync(state.data)
        dispatch({ type: 'RESET', payload: defaultState })
    }

    const handleUpdate = (field, value) => {
        dispatch({ type: 'UPDATE', payload: {field, value} })
    }

    return (
        <Grid container>
            <Grid item xs={12} lg={8} style={{border: '1px solid lightgrey'}}>
                <ProductDataForm
                    data={state.data}
                    handleUpdate={handleUpdate}
                />
            </Grid>
            <Grid item xs={12} lg={4} style={{border: '1px solid lightgrey'}}>
                <NutriFacts
                    data={state.data}
                    handleUpdate={handleUpdate}
                />
            </Grid>
            <Grid item xs={12} lg={6} style={{border: '1px solid lightgrey'}}>
                <FormatData
                    data={state.data}
                    handleUpdate={handleUpdate}
                />
            </Grid>
            <Grid item xs={12} lg={6} style={{border: '1px solid lightgrey'}}>
                <CertificationData
                    data={state.data}
                    handleUpdate={handleUpdate}
                />
            </Grid>

            <Button 
                variant="contained" 
                fullWidth 
                size="large" 
                style={{ backgroundColor: '#90caf9', margin: 5}} 
                onClick={() => { handelSubmit()}}
            >
                Submit
            </Button>
        </Grid>
    )
}

initializeBlock(() => <DataInput />);
