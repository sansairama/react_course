# Info about intregity attribute in package-lock.json . Read more about package-lock.json at -:

- https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json

    Sites and applications on the web are rarely composed of resources from only a single origin. For example, authors pull scripts and styles from a wide variety of services and content delivery networks, and must trust that the delivered representation is, in fact, what they expected to load. If an attacker can trick a user into downloading content from a hostile server (via DNS [RFC1035] poisoning, or other such means), the author has no recourse. Likewise, an attacker who can replace the file on the Content Delivery Network (CDN) server has the ability to inject arbitrary content.

    Delivering resources over a secure channel mitigates some of this risk: with TLS [TLS], HSTS [RFC6797], and pinned public keys [RFC7469], a user agent can be fairly certain that it is indeed speaking with the server it believes it’s talking to. These mechanisms, however, authenticate only the server, not the content. An attacker (or administrator) with access to the server can manipulate content with impunity. Ideally, authors would not only be able to pin the keys of a server, but also pin the content, ensuring that an exact representation of a resource, and only that representation, loads and executes.

    This document specifies such a validation scheme, extending two HTML elements with an integrity attribute that contains a cryptographic hash of the representation of the resource the author expects to load. For instance, an author may wish to load some framework from a shared server rather than hosting it on their own origin. Specifying that the expected SHA-384 hash of https://example.com/example-framework.js is Li9vy3DqF8tnTXuiaAJuML3ky+er10rcgNR/VqsVpcw+ThHmYcwiB1pbOxEbzJr7 means that the user agent can verify that the data it loads from that URL matches that expected hash before executing the JavaScript it contains. This integrity verification significantly reduces the risk that an attacker can substitute malicious content.

Read more
- https://w3c.github.io/webappsec-subresource-integrity/
