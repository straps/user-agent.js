
/*!
 * Ext JS
 * Copyright(c) 2010 Ext JS, Inc.
 * Authored by TJ Holowaychuk
 * MIT Licensed
 */

/**
 * Library version.
 */

exports.version = '0.0.1'

exports.parse = function(str) {
  var browser = name(str)
  return {
    name: browser,
    version: version(str, browser),
    os: os(str)
  }
}

/**
 * Get the browser version based on the given browser name.
 *
 * @param  {String} str
 * @param  {String} name
 * @return {String}
 * @api private
 */

function version(str, name) {
  var re
  switch (name) {
    case 'chrome': re = /chrome\/([\d\w\.\-]+)/i; break
    case 'safari': re = /version\/([\d\w\.\-]+)/i; break
    default: re = new RegExp(name + '[\\/ ]([\\d\\w\\.\\-]+)', 'i')
  }
  return re && re.exec(str) && RegExp.$1
}

/**
 * Supported operating systems.
 */

var operatingSystems = {
  'Windows Vista': /windows nt 6\.0/i,
  'Windows 7': /windows nt 6\.\d+/i,
  'Windows 2003': /windows nt 5\.2+/i,
  'Windows XP': /windows nt 5\.1+/i,
  'Windows 2000': /windows nt 5\.0+/i,
  'OS X $1.$2': /os x (\d+)[._](\d+)/i,
  'Linux': /linux/i
}

var osNames = Object.keys(operatingSystems)

/**
 * Get operating system from the given user-agent string.
 *
 * @param  {String} str
 * @return {String}
 * @api private
 */

function os(str) {
  for (var i = 0, len = osNames.length; i < len; ++i)
    if (operatingSystems[osNames[i]].test(str))
      return osNames[i]
}

/**
 * Supported browser names.
 */

var names = [
    'konqueror',
    'chrome',
    'safari',
    'opera',
    'msie'
  ]

/**
 * Get browser name for the given user-agent string.
 *
 * @param  {String} str
 * @return {String}
 * @api private
 */

function name(str) {
  str = str.toLowerCase()
  for (var i = 0, len = names.length; i < len; ++i)
    if (str.indexOf(names[i]) !== -1)
      return names[i]
}