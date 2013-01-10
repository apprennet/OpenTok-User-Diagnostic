OpenTok-User-Diagnostic
=======================

A library for getting a user's network, software, and hardware diagnostics. This library provides the same data used on the TokBox user diagnostic page (http://tokbox.com/user-diagnostic). Using it you will be able to get data like the following:

```javascript
{
    "cat_software": {
        "flash_version": {
            "Flash Version": {
                "reason": "v11.5",
                "result": "Pass"
            }
        },
        "local_shared_object": {
            "Local Shared Object": {
                "reason": "Can write to local storage",
                "result": "Pass"
            }
        },
        "user_agent": {
            "User Agent": {
                "reason": "Chrome 23",
                "result": "Pass"
            }
        },
        "operating_system": {
            "Operating System": {
                "reason": "Mac OS 10.7.5",
                "result": "Pass"
            }
        }
    },
    "cat_hardware": {
        "camera_count": {
            "count": {
                "reason": "Detected 1 camera",
                "result": "Pass"
            }
        },
        "microphone_count": {
            "Count": {
                "reason": "Detected 2 microphones",
                "result": "Pass"
            }
        }
    },
    "cat_network": {
        "uri_access": {
            "http://static.opentok.com": {
                "reason": "Connected Successfully",
                "result": "Pass"
            },
            "http://hlg.tokbox.com": {
                "reason": "Connected Successfully",
                "result": "Pass"
            },
            "http://api.opentok.com": {
                "reason": "Connected Successfully",
                "result": "Pass"
            }
        },
        "port_access": {
            "80": {
                "reason": "Connection established",
                "result": "Pass"
            },
            "443": {
                "reason": "Failed to connect",
                "result": "Warn"
            },
            "1935": {
                "reason": "Connection established",
                "result": "Pass"
            }
        }
    }
}
```


Installation
------------
Include TB.diagnostic.min.js on your page:

```html
<script type="text/javascript" src="TB.diagnostic.min.js"></script>
```


Usage
-----
The library exposes one method <code>TB.runTests(callback)</code>. Use it like this:

```javascript
TB.runTests(function(data) {
  // Do something with data...
  
  if (data.cat_network.port_access["443"].result == "Fail") {
    alert("Port 443 is closed!");
  }
  
  if (data.cat_hardware.camera_count.count.result == "Fail") {
    alert("No webcams were found");
  }
})
```

The call to <code>TB.runTests</code> can take about 10-20 seconds to run.
