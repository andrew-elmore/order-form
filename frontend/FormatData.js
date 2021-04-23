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

const NutriFacts = (props) => {
    const classes = useStyles();

    const fields = [
        {
            width: 3,
            data: [
                { multiLine: false, rows: 0, label: "LABEL_TYPE" },
                { multiLine: false, rows: 0, label: "CODE_TYPE" },
                { multiLine: true, rows: 3, label: "NOTES" },
                { multiLine: false, rows: 0, label: "?SUPPLIER_ID" },
            ],
        },
        {
            width: 3,
            data: [
                { multiLine: false, rows: 0, label: "?NUTRI" },
                { multiLine: false, rows: 0, label: "CATEGORY" },
                { multiLine: false, rows: 0, label: "?NEW_FORMAT" },
                { multiLine: false, rows: 0, label: "F_SIZE" },
                { multiLine: false, rows: 0, label: "?OGSRT" },
            ],
        },
        {
            width: 3,
            data: [
                { multiLine: false, rows: 0, label: "?%_FT" },
                { multiLine: false, rows: 0, label: "WG_LOGO" },
                { multiLine: false, rows: 0, label: "COUNTRY" },
                { multiLine: true, rows: 3, label: "PROP_65" },
            ],
        },
        {
            width: 3,
            data: [
                { multiLine: false, rows: 0, label: "BIOENG" },
                { multiLine: false, rows: 0, label: "DISTB" },
                { multiLine: false, rows: 0, label: "DISTB_ID" },
            ],
        },
        

    ]
    return (
        <div>
            <Grid container >
                {fields.map((row) => {
                    return (
                        <Grid item xs={12} lg={row.width}>
                            {row.data.map((field) => {
                                return (
                                    <div style={{ margin: 3 }}>
                                        {field.multiLine ? (

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
                                        ) : (
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

export default NutriFacts