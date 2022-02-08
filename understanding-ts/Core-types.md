# Core Types of TypeScript

## number
* 1, 5.3, -10
* All numbers, no differentiation between integers or floats

## string
* 'Hi', "Hi", `Hi`
* All text values

## boolean
* true, false
* Just these two, no "truthy" or "falsy" values

## object
* { age: 30 }
* Any JavaScript object, more specific types (type of object) are possible

## Array
* [1, 2, 3]
* Any JavaScript array, type can be flexible or strict (regarding the element types)

## Tuple
* [1, 2]
* Added by TypeScript: Fixed-length array

## Enum
* enum { NEW, OLD }
* Added by TypeScript: Automatically enumerated global constant identifiers

## any
* \*
* Any kind of value, no specific type assignment

## The key difference is: 
* JavaScript uses "dynamic types" (resolved at runtime).
* TypeScript uses "static types" (set during development).