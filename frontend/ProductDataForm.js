import React from 'react'
import { Grid, TextField, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {},
    multiline: {
        margin: 3,
    },
    oneline: {
        margin: 3,
    }
}));

const ProductDataForm = (props) => {
    const classes = useStyles();

    const fields = [
        {
            width: 4,
            data: [
                { multiLine: false, height: 0, label: "TL_ID2" },
                { multiLine: false, height: 0, label: "ENTERED_BY" },
                { multiLine: false, height: 0, label: "?UPDATED_PRODS" },
                { multiLine: false, height: 0, label: "UPDATED_INFO" },
                { multiLine: false, height: 0, label: "AUDIT" },
                { multiLine: false, height: 0, label: "BRAND" },
                { multiLine: false, height: 0, label: "PRODUCT" },
                { multiLine: false, height: 0, label: "PRODUCT_LINE_1" },
                { multiLine: false, height: 0, label: "PRODUCT_LINE_2" },
                { multiLine: false, height: 0, label: "PRODUCT_LINE_3" },
                { multiLine: false, height: 0, label: "?SELL_PT" },
                { multiLine: false, height: 0, label: "?DISTB_BY" },
                { multiLine: false, height: 0, label: "INFO_SOURCE" },
                { multiLine: false, height: 0, label: "?SELL_PTS_SRF" },
                { multiLine: false, height: 0, label: "DISCO" },
                { multiLine: false, height: 0, label: "DISCO_DATE" },
            ]
        },
        {
            width: 4,
            data: [
                { multiLine: true, rows: 45,label: "INGREDIENTS" },
            ]
        },
        {
            width: 4,
            data: [
                { multiLine: true, rows: 14, label: "ING_ONLY" },
                { multiLine: true, rows: 14, label: "ALLERGEN_VENDOR" },
                { multiLine: true, rows: 14, label: "COOKING_INSTR" }
            ]
        }
    ]
    return (
        <div>
            <Grid container > 
                {fields.map((row) => {
                    return(
                        <Grid item xs={12} lg={row.width}>
                            {row.data.map((field) => {
                                return(
                                    <div style={{margin: 3}}>
                                        {field.multiLine?(

                                            <TextField
                                                error={field.label[0] === '?'}
                                                className={classes.multiline}
                                                label={field.label}
                                                multiline
                                                rows={field.rows}
                                                fullWidth
                                                variant="outlined"
                                                value={props.data[field.label]}
                                                onChange={(e) => {
                                                    props.handleUpdate(field.label, e.currentTarget.value)
                                                }}
                                            />
                                            ):(
                                                <TextField
                                                    error={field.label[0] === '?'}
                                                    className={classes.oneline}
                                                    label={field.label}
                                                    fullWidth
                                                    variant="outlined"
                                                    value={props.data[field.label]}
                                                    onChange={(e) => {
                                                        props.handleUpdate(field.label, e.currentTarget.value)
                                                    }}
                                                />
                                            )}
                                    </div>
                                )
                            })}

                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default ProductDataForm