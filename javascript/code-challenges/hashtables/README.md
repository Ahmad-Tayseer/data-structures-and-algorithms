# Hashtables

Hashtables are a data structure that utilize key value pairs, this means every Node or Bucket has both a key, and a value.

The basic idea of a hashtable is the ability to store the key into this data structure, and quickly retrieve the value. This is done through what we call a hash.

## Challenge

Implement a Hashtable Class with the following methods: set, get, contains, keys, hash.

## Approach & Efficiency

- Time Complexity: O(1) Because we are able to hash our key and determine the exact location where our value is stored.

- Space Complexity: O(1) No additional space is requiered.

## API

- set(key,value): Arguments: key and value, Returns: nothing >> This method should hash the key, and set the key and value pair in the table, handling collisions as needed. Should a given key already exist, replace its value from the value argument given to this method.

- get(key): Arguments: key, Returns: Value associated with that key in the table.

- contains(key): Arguments: key, Returns: Boolean indicating if the key exists in the table already.

- keys(): Returns: Collection of keys.

- hash(key): Arguments: key, Returns: Index in the collection for that key.
