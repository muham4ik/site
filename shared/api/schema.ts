/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/locations": {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get all locations */
    get: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description A list of locations */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            "application/json": components["schemas"]["Location"][]
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/peer": {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get peer information by location */
    get: {
      parameters: {
        query: {
          location: string
        }
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description Peer information */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            "application/json": components["schemas"]["PeerResponse"]
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  "/stat": {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get statistics of nodes */
    get: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description A list of node statistics */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            "application/json": components["schemas"]["NodeStat"][]
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    Location: {
      /** @example uk */
      code: string
      /** @example 🇬🇧 uk */
      name: string
    }
    PeerResponse: {
      iface: {
        /** @example 10.0.0.1/24 */
        address: string
        /** @example example-key-123456 */
        key: string
        /** @example 8.8.8.8, 8.8.4.4 */
        dns: string
      }
      peer: {
        /** @example example-pubkey-abcdef */
        pubkey: string
        /** @example example-psk-123456 */
        psk: string
        /** @example 0.0.0.0/0 */
        allowed_ips: string
        /** @example 192.0.2.1:51820 */
        endpoint: string
      }
    }
    NodeStat: {
      /** @example example-node-id */
      node: string
      /** @example example-hostname */
      hostname: string
      location: {
        /** @example uk */
        code: string
        /** @example 🇬🇧 uk */
        name: string
      }
      /** @example wg */
      type: string
      peers: {
        /** @example 1500 */
        total: number
        /** @example 75 */
        live: number
        /** @example 1234567890 */
        tx: string
        /** @example 0987654321 */
        rx: string
      }
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export type operations = Record<string, never>
