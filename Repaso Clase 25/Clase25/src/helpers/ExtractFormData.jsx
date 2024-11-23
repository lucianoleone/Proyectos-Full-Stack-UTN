import React from 'react'

function ExtractFormData(form_jsx) {
        const form_data = new FormData(form_jsx)
        const form_keys = form_data.keys().toArray()
        const form_values = {}
        for (let key of form_keys) {
            form_values[key] = form_data.get(key)
        }

    return form_values
}

export default ExtractFormData