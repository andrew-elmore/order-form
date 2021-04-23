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

const CertificationData = (props) => {
    const classes = useStyles();

    const fields = [
        {
            width: 6,
            data: [
                { multiLine: true, rows: 6, label: "?OG_NGMO_CERT" },
                { multiLine: true, rows: 5, label: "?NGMO_EXP" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, rows: 0, label: "OG_CERT_EXP" },
                { multiLine: true, rows: 4, label: "?CERT_STATEMENT" },
                { multiLine: true, rows: 4, label: "NGMO_CERT" },
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

export default CertificationData