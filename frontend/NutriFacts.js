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
            width: 12,
            data: [
                { multiLine: false, height: 0, label: "SERV_SIZE" },
                { multiLine: false, height: 0, label: "SERV_SIZE_1" },
                { multiLine: false, height: 0, label: "SERV_SIZE_2" },
                { multiLine: false, height: 0, label: "CALORIES" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "TOTAL_FAT" },
                { multiLine: false, height: 0, label: "DV_FAT" },

            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "SAT_FAT" },
                { multiLine: false, height: 0, label: "DV_SAT_FAT" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "TRANS_FAT" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "CHOLEST_MG" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "SODIUM_MG" },
                { multiLine: false, height: 0, label: "DV_SODIUM" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "TOTAL_CARB" },
                { multiLine: false, height: 0, label: "DV_CARB" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "FIBER" },
                { multiLine: false, height: 0, label: "DV_FIBER" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "TOTAL_SUGAR" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "ADDED_SUGAR" },
                { multiLine: false, height: 0, label: "DV_SUGAR" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "PROTEIN" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "VIT_D_MCG" },
                { multiLine: false, height: 0, label: "VIT_D" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "CALCIUM_MG" },
                { multiLine: false, height: 0, label: "CALCIUM" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "IRON_MG" },
                { multiLine: false, height: 0, label: "IRON" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "POTASS_MG" },
                { multiLine: false, height: 0, label: "POTASS" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "CAL_FAT" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "DV_VIT_A" },
            ],
        },
        {
            width: 6,
            data: [
                { multiLine: false, height: 0, label: "DV_VIT_C" },
            ],
        },
       
    ]
    return (
        <div>
            <Grid container >
                {fields.map((row) => {
                    return (
                        <Grid container >
                            {row.data.map((field) => {
                                return (
                                    <Grid xs={12} lg={row.width}>

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
                                    </Grid>                                )
                            })}

                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default NutriFacts