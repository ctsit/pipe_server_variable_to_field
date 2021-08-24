# Pipe Server Variable to Field
Autopopulate fields with PHP `$_SERVER` variables

## Prerequisites
 - REDcap >= 10.4.1

## Manual Installation
- Clone this repo into to `<redcap-root>/modules/pipe_server_variable_to_field_v0.0.0`.

## Introduction

## Configuration

For each "Enabled Field" you may set the following:

- **Field**: The field_name you wish to populate with the value set in "\$_SERVER[]".
- **\$_SERVER[]**: The value `$foo` which will be passed in to `$_SERVER[$foo]` to populate the field you set in "Field". Dropdown choices will be populated for you.
