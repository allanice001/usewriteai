/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Account
 *
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>;
/**
 * Model Session
 *
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>;
/**
 * Model VerificationToken
 *
 */
export type VerificationToken =
  $Result.DefaultSelection<Prisma.$VerificationTokenPayload>;
/**
 * Model Project
 *
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>;
/**
 * Model UserPreference
 *
 */
export type UserPreference =
  $Result.DefaultSelection<Prisma.$UserPreferencePayload>;
/**
 * Model ApiUsage
 *
 */
export type ApiUsage = $Result.DefaultSelection<Prisma.$ApiUsagePayload>;
/**
 * Model SharedProject
 *
 */
export type SharedProject =
  $Result.DefaultSelection<Prisma.$SharedProjectPayload>;
/**
 * Model ProjectInvitation
 *
 */
export type ProjectInvitation =
  $Result.DefaultSelection<Prisma.$ProjectInvitationPayload>;
/**
 * Model ExportHistory
 *
 */
export type ExportHistory =
  $Result.DefaultSelection<Prisma.$ExportHistoryPayload>;
/**
 * Model WritingAnalytics
 *
 */
export type WritingAnalytics =
  $Result.DefaultSelection<Prisma.$WritingAnalyticsPayload>;
/**
 * Model AiInteraction
 *
 */
export type AiInteraction =
  $Result.DefaultSelection<Prisma.$AiInteractionPayload>;
/**
 * Model Subscription
 *
 */
export type Subscription =
  $Result.DefaultSelection<Prisma.$SubscriptionPayload>;
/**
 * Model SubscriptionUsage
 *
 */
export type SubscriptionUsage =
  $Result.DefaultSelection<Prisma.$SubscriptionUsagePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more VerificationTokens
   * const verificationTokens = await prisma.verificationToken.findMany()
   * ```
   */
  get verificationToken(): Prisma.VerificationTokenDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreference`: Exposes CRUD operations for the **UserPreference** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserPreferences
   * const userPreferences = await prisma.userPreference.findMany()
   * ```
   */
  get userPreference(): Prisma.UserPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiUsage`: Exposes CRUD operations for the **ApiUsage** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ApiUsages
   * const apiUsages = await prisma.apiUsage.findMany()
   * ```
   */
  get apiUsage(): Prisma.ApiUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sharedProject`: Exposes CRUD operations for the **SharedProject** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more SharedProjects
   * const sharedProjects = await prisma.sharedProject.findMany()
   * ```
   */
  get sharedProject(): Prisma.SharedProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectInvitation`: Exposes CRUD operations for the **ProjectInvitation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ProjectInvitations
   * const projectInvitations = await prisma.projectInvitation.findMany()
   * ```
   */
  get projectInvitation(): Prisma.ProjectInvitationDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.exportHistory`: Exposes CRUD operations for the **ExportHistory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ExportHistories
   * const exportHistories = await prisma.exportHistory.findMany()
   * ```
   */
  get exportHistory(): Prisma.ExportHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.writingAnalytics`: Exposes CRUD operations for the **WritingAnalytics** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more WritingAnalytics
   * const writingAnalytics = await prisma.writingAnalytics.findMany()
   * ```
   */
  get writingAnalytics(): Prisma.WritingAnalyticsDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.aiInteraction`: Exposes CRUD operations for the **AiInteraction** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AiInteractions
   * const aiInteractions = await prisma.aiInteraction.findMany()
   * ```
   */
  get aiInteraction(): Prisma.AiInteractionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Subscriptions
   * const subscriptions = await prisma.subscription.findMany()
   * ```
   */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionUsage`: Exposes CRUD operations for the **SubscriptionUsage** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more SubscriptionUsages
   * const subscriptionUsages = await prisma.subscriptionUsage.findMany()
   * ```
   */
  get subscriptionUsage(): Prisma.SubscriptionUsageDelegate<
    ExtArgs,
    ClientOptions
  >;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Account: "Account";
    Session: "Session";
    VerificationToken: "VerificationToken";
    Project: "Project";
    UserPreference: "UserPreference";
    ApiUsage: "ApiUsage";
    SharedProject: "SharedProject";
    ProjectInvitation: "ProjectInvitation";
    ExportHistory: "ExportHistory";
    WritingAnalytics: "WritingAnalytics";
    AiInteraction: "AiInteraction";
    Subscription: "Subscription";
    SubscriptionUsage: "SubscriptionUsage";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "user"
        | "account"
        | "session"
        | "verificationToken"
        | "project"
        | "userPreference"
        | "apiUsage"
        | "sharedProject"
        | "projectInvitation"
        | "exportHistory"
        | "writingAnalytics"
        | "aiInteraction"
        | "subscription"
        | "subscriptionUsage";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>;
        fields: Prisma.AccountFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[];
          };
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[];
          };
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[];
          };
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAccount>;
          };
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AccountGroupByOutputType>[];
          };
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>;
            result: $Utils.Optional<AccountCountAggregateOutputType> | number;
          };
        };
      };
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>;
        fields: Prisma.SessionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[];
          };
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[];
          };
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[];
          };
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSession>;
          };
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SessionGroupByOutputType>[];
          };
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>;
            result: $Utils.Optional<SessionCountAggregateOutputType> | number;
          };
        };
      };
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>;
        fields: Prisma.VerificationTokenFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>;
          };
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>;
          };
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[];
          };
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>;
          };
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[];
          };
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>;
          };
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>;
          };
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[];
          };
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>;
          };
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVerificationToken>;
          };
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[];
          };
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<VerificationTokenCountAggregateOutputType>
              | number;
          };
        };
      };
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>;
        fields: Prisma.ProjectFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>;
          };
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>;
          };
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[];
          };
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>;
          };
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[];
          };
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>;
          };
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>;
          };
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[];
          };
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>;
          };
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProject>;
          };
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProjectGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>;
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number;
          };
        };
      };
      UserPreference: {
        payload: Prisma.$UserPreferencePayload<ExtArgs>;
        fields: Prisma.UserPreferenceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserPreferenceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserPreferenceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>;
          };
          findFirst: {
            args: Prisma.UserPreferenceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserPreferenceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>;
          };
          findMany: {
            args: Prisma.UserPreferenceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[];
          };
          create: {
            args: Prisma.UserPreferenceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>;
          };
          createMany: {
            args: Prisma.UserPreferenceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserPreferenceCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[];
          };
          delete: {
            args: Prisma.UserPreferenceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>;
          };
          update: {
            args: Prisma.UserPreferenceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>;
          };
          deleteMany: {
            args: Prisma.UserPreferenceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserPreferenceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserPreferenceUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[];
          };
          upsert: {
            args: Prisma.UserPreferenceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>;
          };
          aggregate: {
            args: Prisma.UserPreferenceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserPreference>;
          };
          groupBy: {
            args: Prisma.UserPreferenceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserPreferenceGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserPreferenceCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<UserPreferenceCountAggregateOutputType>
              | number;
          };
        };
      };
      ApiUsage: {
        payload: Prisma.$ApiUsagePayload<ExtArgs>;
        fields: Prisma.ApiUsageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ApiUsageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ApiUsageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>;
          };
          findFirst: {
            args: Prisma.ApiUsageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ApiUsageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>;
          };
          findMany: {
            args: Prisma.ApiUsageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>[];
          };
          create: {
            args: Prisma.ApiUsageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>;
          };
          createMany: {
            args: Prisma.ApiUsageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ApiUsageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>[];
          };
          delete: {
            args: Prisma.ApiUsageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>;
          };
          update: {
            args: Prisma.ApiUsageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>;
          };
          deleteMany: {
            args: Prisma.ApiUsageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ApiUsageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ApiUsageUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>[];
          };
          upsert: {
            args: Prisma.ApiUsageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>;
          };
          aggregate: {
            args: Prisma.ApiUsageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApiUsage>;
          };
          groupBy: {
            args: Prisma.ApiUsageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ApiUsageGroupByOutputType>[];
          };
          count: {
            args: Prisma.ApiUsageCountArgs<ExtArgs>;
            result: $Utils.Optional<ApiUsageCountAggregateOutputType> | number;
          };
        };
      };
      SharedProject: {
        payload: Prisma.$SharedProjectPayload<ExtArgs>;
        fields: Prisma.SharedProjectFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SharedProjectFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedProjectPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SharedProjectFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedProjectPayload>;
          };
          findFirst: {
            args: Prisma.SharedProjectFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedProjectPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SharedProjectFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedProjectPayload>;
          };
          findMany: {
            args: Prisma.SharedProjectFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedProjectPayload>[];
          };
          create: {
            args: Prisma.SharedProjectCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedProjectPayload>;
          };
          createMany: {
            args: Prisma.SharedProjectCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SharedProjectCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedProjectPayload>[];
          };
          delete: {
            args: Prisma.SharedProjectDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedProjectPayload>;
          };
          update: {
            args: Prisma.SharedProjectUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedProjectPayload>;
          };
          deleteMany: {
            args: Prisma.SharedProjectDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SharedProjectUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SharedProjectUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedProjectPayload>[];
          };
          upsert: {
            args: Prisma.SharedProjectUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedProjectPayload>;
          };
          aggregate: {
            args: Prisma.SharedProjectAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSharedProject>;
          };
          groupBy: {
            args: Prisma.SharedProjectGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SharedProjectGroupByOutputType>[];
          };
          count: {
            args: Prisma.SharedProjectCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<SharedProjectCountAggregateOutputType>
              | number;
          };
        };
      };
      ProjectInvitation: {
        payload: Prisma.$ProjectInvitationPayload<ExtArgs>;
        fields: Prisma.ProjectInvitationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProjectInvitationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProjectInvitationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>;
          };
          findFirst: {
            args: Prisma.ProjectInvitationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProjectInvitationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>;
          };
          findMany: {
            args: Prisma.ProjectInvitationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>[];
          };
          create: {
            args: Prisma.ProjectInvitationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>;
          };
          createMany: {
            args: Prisma.ProjectInvitationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProjectInvitationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>[];
          };
          delete: {
            args: Prisma.ProjectInvitationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>;
          };
          update: {
            args: Prisma.ProjectInvitationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>;
          };
          deleteMany: {
            args: Prisma.ProjectInvitationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProjectInvitationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProjectInvitationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>[];
          };
          upsert: {
            args: Prisma.ProjectInvitationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProjectInvitationPayload>;
          };
          aggregate: {
            args: Prisma.ProjectInvitationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProjectInvitation>;
          };
          groupBy: {
            args: Prisma.ProjectInvitationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProjectInvitationGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProjectInvitationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ProjectInvitationCountAggregateOutputType>
              | number;
          };
        };
      };
      ExportHistory: {
        payload: Prisma.$ExportHistoryPayload<ExtArgs>;
        fields: Prisma.ExportHistoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ExportHistoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ExportHistoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>;
          };
          findFirst: {
            args: Prisma.ExportHistoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ExportHistoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>;
          };
          findMany: {
            args: Prisma.ExportHistoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>[];
          };
          create: {
            args: Prisma.ExportHistoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>;
          };
          createMany: {
            args: Prisma.ExportHistoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ExportHistoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>[];
          };
          delete: {
            args: Prisma.ExportHistoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>;
          };
          update: {
            args: Prisma.ExportHistoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>;
          };
          deleteMany: {
            args: Prisma.ExportHistoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ExportHistoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ExportHistoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>[];
          };
          upsert: {
            args: Prisma.ExportHistoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>;
          };
          aggregate: {
            args: Prisma.ExportHistoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateExportHistory>;
          };
          groupBy: {
            args: Prisma.ExportHistoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ExportHistoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.ExportHistoryCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ExportHistoryCountAggregateOutputType>
              | number;
          };
        };
      };
      WritingAnalytics: {
        payload: Prisma.$WritingAnalyticsPayload<ExtArgs>;
        fields: Prisma.WritingAnalyticsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.WritingAnalyticsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WritingAnalyticsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.WritingAnalyticsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WritingAnalyticsPayload>;
          };
          findFirst: {
            args: Prisma.WritingAnalyticsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WritingAnalyticsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.WritingAnalyticsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WritingAnalyticsPayload>;
          };
          findMany: {
            args: Prisma.WritingAnalyticsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WritingAnalyticsPayload>[];
          };
          create: {
            args: Prisma.WritingAnalyticsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WritingAnalyticsPayload>;
          };
          createMany: {
            args: Prisma.WritingAnalyticsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.WritingAnalyticsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WritingAnalyticsPayload>[];
          };
          delete: {
            args: Prisma.WritingAnalyticsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WritingAnalyticsPayload>;
          };
          update: {
            args: Prisma.WritingAnalyticsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WritingAnalyticsPayload>;
          };
          deleteMany: {
            args: Prisma.WritingAnalyticsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.WritingAnalyticsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.WritingAnalyticsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WritingAnalyticsPayload>[];
          };
          upsert: {
            args: Prisma.WritingAnalyticsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$WritingAnalyticsPayload>;
          };
          aggregate: {
            args: Prisma.WritingAnalyticsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateWritingAnalytics>;
          };
          groupBy: {
            args: Prisma.WritingAnalyticsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<WritingAnalyticsGroupByOutputType>[];
          };
          count: {
            args: Prisma.WritingAnalyticsCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<WritingAnalyticsCountAggregateOutputType>
              | number;
          };
        };
      };
      AiInteraction: {
        payload: Prisma.$AiInteractionPayload<ExtArgs>;
        fields: Prisma.AiInteractionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AiInteractionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiInteractionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AiInteractionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiInteractionPayload>;
          };
          findFirst: {
            args: Prisma.AiInteractionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiInteractionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AiInteractionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiInteractionPayload>;
          };
          findMany: {
            args: Prisma.AiInteractionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiInteractionPayload>[];
          };
          create: {
            args: Prisma.AiInteractionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiInteractionPayload>;
          };
          createMany: {
            args: Prisma.AiInteractionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AiInteractionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiInteractionPayload>[];
          };
          delete: {
            args: Prisma.AiInteractionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiInteractionPayload>;
          };
          update: {
            args: Prisma.AiInteractionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiInteractionPayload>;
          };
          deleteMany: {
            args: Prisma.AiInteractionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AiInteractionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AiInteractionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiInteractionPayload>[];
          };
          upsert: {
            args: Prisma.AiInteractionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AiInteractionPayload>;
          };
          aggregate: {
            args: Prisma.AiInteractionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAiInteraction>;
          };
          groupBy: {
            args: Prisma.AiInteractionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AiInteractionGroupByOutputType>[];
          };
          count: {
            args: Prisma.AiInteractionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<AiInteractionCountAggregateOutputType>
              | number;
          };
        };
      };
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>;
        fields: Prisma.SubscriptionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
          };
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
          };
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
          };
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSubscription>;
          };
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SubscriptionGroupByOutputType>[];
          };
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<SubscriptionCountAggregateOutputType>
              | number;
          };
        };
      };
      SubscriptionUsage: {
        payload: Prisma.$SubscriptionUsagePayload<ExtArgs>;
        fields: Prisma.SubscriptionUsageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SubscriptionUsageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SubscriptionUsageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>;
          };
          findFirst: {
            args: Prisma.SubscriptionUsageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SubscriptionUsageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>;
          };
          findMany: {
            args: Prisma.SubscriptionUsageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>[];
          };
          create: {
            args: Prisma.SubscriptionUsageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>;
          };
          createMany: {
            args: Prisma.SubscriptionUsageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SubscriptionUsageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>[];
          };
          delete: {
            args: Prisma.SubscriptionUsageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>;
          };
          update: {
            args: Prisma.SubscriptionUsageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>;
          };
          deleteMany: {
            args: Prisma.SubscriptionUsageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SubscriptionUsageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SubscriptionUsageUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>[];
          };
          upsert: {
            args: Prisma.SubscriptionUsageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>;
          };
          aggregate: {
            args: Prisma.SubscriptionUsageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSubscriptionUsage>;
          };
          groupBy: {
            args: Prisma.SubscriptionUsageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SubscriptionUsageGroupByOutputType>[];
          };
          count: {
            args: Prisma.SubscriptionUsageCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<SubscriptionUsageCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    account?: AccountOmit;
    session?: SessionOmit;
    verificationToken?: VerificationTokenOmit;
    project?: ProjectOmit;
    userPreference?: UserPreferenceOmit;
    apiUsage?: ApiUsageOmit;
    sharedProject?: SharedProjectOmit;
    projectInvitation?: ProjectInvitationOmit;
    exportHistory?: ExportHistoryOmit;
    writingAnalytics?: WritingAnalyticsOmit;
    aiInteraction?: AiInteractionOmit;
    subscription?: SubscriptionOmit;
    subscriptionUsage?: SubscriptionUsageOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number;
    accounts: number;
    sessions: number;
    sharedProjects: number;
    projectInvitations: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs;
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs;
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs;
    sharedProjects?: boolean | UserCountOutputTypeCountSharedProjectsArgs;
    projectInvitations?:
      | boolean
      | UserCountOutputTypeCountProjectInvitationsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AccountWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SessionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedProjectsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SharedProjectWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectInvitationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectInvitationWhereInput;
  };

  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    sharedWith: number;
    invitations: number;
    exportHistory: number;
    aiInteractions: number;
  };

  export type ProjectCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    sharedWith?: boolean | ProjectCountOutputTypeCountSharedWithArgs;
    invitations?: boolean | ProjectCountOutputTypeCountInvitationsArgs;
    exportHistory?: boolean | ProjectCountOutputTypeCountExportHistoryArgs;
    aiInteractions?: boolean | ProjectCountOutputTypeCountAiInteractionsArgs;
  };

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSharedWithArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SharedProjectWhereInput;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountInvitationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectInvitationWhereInput;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountExportHistoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ExportHistoryWhereInput;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountAiInteractionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AiInteractionWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    hashedPassword: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    stripeCustomerId: string | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    hashedPassword: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    stripeCustomerId: string | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    emailVerified: number;
    image: number;
    hashedPassword: number;
    createdAt: number;
    updatedAt: number;
    stripeCustomerId: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    image?: true;
    hashedPassword?: true;
    createdAt?: true;
    updatedAt?: true;
    stripeCustomerId?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    image?: true;
    hashedPassword?: true;
    createdAt?: true;
    updatedAt?: true;
    stripeCustomerId?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    image?: true;
    hashedPassword?: true;
    createdAt?: true;
    updatedAt?: true;
    stripeCustomerId?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    name: string | null;
    email: string;
    emailVerified: Date | null;
    image: string | null;
    hashedPassword: string | null;
    createdAt: Date;
    updatedAt: Date;
    stripeCustomerId: string | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      emailVerified?: boolean;
      image?: boolean;
      hashedPassword?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      stripeCustomerId?: boolean;
      projects?: boolean | User$projectsArgs<ExtArgs>;
      accounts?: boolean | User$accountsArgs<ExtArgs>;
      sessions?: boolean | User$sessionsArgs<ExtArgs>;
      preferences?: boolean | User$preferencesArgs<ExtArgs>;
      apiUsage?: boolean | User$apiUsageArgs<ExtArgs>;
      sharedProjects?: boolean | User$sharedProjectsArgs<ExtArgs>;
      projectInvitations?: boolean | User$projectInvitationsArgs<ExtArgs>;
      subscription?: boolean | User$subscriptionArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      emailVerified?: boolean;
      image?: boolean;
      hashedPassword?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      stripeCustomerId?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      emailVerified?: boolean;
      image?: boolean;
      hashedPassword?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      stripeCustomerId?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    image?: boolean;
    hashedPassword?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    stripeCustomerId?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "email"
    | "emailVerified"
    | "image"
    | "hashedPassword"
    | "createdAt"
    | "updatedAt"
    | "stripeCustomerId",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    projects?: boolean | User$projectsArgs<ExtArgs>;
    accounts?: boolean | User$accountsArgs<ExtArgs>;
    sessions?: boolean | User$sessionsArgs<ExtArgs>;
    preferences?: boolean | User$preferencesArgs<ExtArgs>;
    apiUsage?: boolean | User$apiUsageArgs<ExtArgs>;
    sharedProjects?: boolean | User$sharedProjectsArgs<ExtArgs>;
    projectInvitations?: boolean | User$projectInvitationsArgs<ExtArgs>;
    subscription?: boolean | User$subscriptionArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[];
      accounts: Prisma.$AccountPayload<ExtArgs>[];
      sessions: Prisma.$SessionPayload<ExtArgs>[];
      preferences: Prisma.$UserPreferencePayload<ExtArgs> | null;
      apiUsage: Prisma.$ApiUsagePayload<ExtArgs> | null;
      sharedProjects: Prisma.$SharedProjectPayload<ExtArgs>[];
      projectInvitations: Prisma.$ProjectInvitationPayload<ExtArgs>[];
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string | null;
        email: string;
        emailVerified: Date | null;
        image: string | null;
        hashedPassword: string | null;
        createdAt: Date;
        updatedAt: Date;
        stripeCustomerId: string | null;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    projects<T extends User$projectsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$projectsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$accountsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AccountPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$sessionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SessionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$preferencesArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    apiUsage<T extends User$apiUsageArgs<ExtArgs> = {}>(
      args?: Subset<T, User$apiUsageArgs<ExtArgs>>,
    ): Prisma__ApiUsageClient<
      $Result.GetResult<
        Prisma.$ApiUsagePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    sharedProjects<T extends User$sharedProjectsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$sharedProjectsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SharedProjectPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    projectInvitations<T extends User$projectInvitationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$projectInvitationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProjectInvitationPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(
      args?: Subset<T, User$subscriptionArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">;
    readonly name: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly emailVerified: FieldRef<"User", "DateTime">;
    readonly image: FieldRef<"User", "String">;
    readonly hashedPassword: FieldRef<"User", "String">;
    readonly createdAt: FieldRef<"User", "DateTime">;
    readonly updatedAt: FieldRef<"User", "DateTime">;
    readonly stripeCustomerId: FieldRef<"User", "String">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.projects
   */
  export type User$projectsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    where?: ProjectWhereInput;
    orderBy?:
      | ProjectOrderByWithRelationInput
      | ProjectOrderByWithRelationInput[];
    cursor?: ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * User.accounts
   */
  export type User$accountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    where?: AccountWhereInput;
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    cursor?: AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * User.sessions
   */
  export type User$sessionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    where?: SessionWhereInput;
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    cursor?: SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[];
  };

  /**
   * User.preferences
   */
  export type User$preferencesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    where?: UserPreferenceWhereInput;
  };

  /**
   * User.apiUsage
   */
  export type User$apiUsageArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null;
    where?: ApiUsageWhereInput;
  };

  /**
   * User.sharedProjects
   */
  export type User$sharedProjectsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedProject
     */
    select?: SharedProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedProject
     */
    omit?: SharedProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedProjectInclude<ExtArgs> | null;
    where?: SharedProjectWhereInput;
    orderBy?:
      | SharedProjectOrderByWithRelationInput
      | SharedProjectOrderByWithRelationInput[];
    cursor?: SharedProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SharedProjectScalarFieldEnum | SharedProjectScalarFieldEnum[];
  };

  /**
   * User.projectInvitations
   */
  export type User$projectInvitationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null;
    where?: ProjectInvitationWhereInput;
    orderBy?:
      | ProjectInvitationOrderByWithRelationInput
      | ProjectInvitationOrderByWithRelationInput[];
    cursor?: ProjectInvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | ProjectInvitationScalarFieldEnum
      | ProjectInvitationScalarFieldEnum[];
  };

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    where?: SubscriptionWhereInput;
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null;
    _avg: AccountAvgAggregateOutputType | null;
    _sum: AccountSumAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
  };

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null;
  };

  export type AccountSumAggregateOutputType = {
    expires_at: number | null;
  };

  export type AccountMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: string | null;
    provider: string | null;
    providerAccountId: string | null;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
  };

  export type AccountMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: string | null;
    provider: string | null;
    providerAccountId: string | null;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
  };

  export type AccountCountAggregateOutputType = {
    id: number;
    userId: number;
    type: number;
    provider: number;
    providerAccountId: number;
    refresh_token: number;
    access_token: number;
    expires_at: number;
    token_type: number;
    scope: number;
    id_token: number;
    session_state: number;
    _all: number;
  };

  export type AccountAvgAggregateInputType = {
    expires_at?: true;
  };

  export type AccountSumAggregateInputType = {
    expires_at?: true;
  };

  export type AccountMinAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    provider?: true;
    providerAccountId?: true;
    refresh_token?: true;
    access_token?: true;
    expires_at?: true;
    token_type?: true;
    scope?: true;
    id_token?: true;
    session_state?: true;
  };

  export type AccountMaxAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    provider?: true;
    providerAccountId?: true;
    refresh_token?: true;
    access_token?: true;
    expires_at?: true;
    token_type?: true;
    scope?: true;
    id_token?: true;
    session_state?: true;
  };

  export type AccountCountAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    provider?: true;
    providerAccountId?: true;
    refresh_token?: true;
    access_token?: true;
    expires_at?: true;
    token_type?: true;
    scope?: true;
    id_token?: true;
    session_state?: true;
    _all?: true;
  };

  export type AccountAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Accounts
     **/
    _count?: true | AccountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AccountAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AccountSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AccountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AccountMaxAggregateInputType;
  };

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
    [P in keyof T & keyof AggregateAccount]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>;
  };

  export type AccountGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AccountWhereInput;
    orderBy?:
      | AccountOrderByWithAggregationInput
      | AccountOrderByWithAggregationInput[];
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum;
    having?: AccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccountCountAggregateInputType | true;
    _avg?: AccountAvgAggregateInputType;
    _sum?: AccountSumAggregateInputType;
    _min?: AccountMinAggregateInputType;
    _max?: AccountMaxAggregateInputType;
  };

  export type AccountGroupByOutputType = {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
    _count: AccountCountAggregateOutputType | null;
    _avg: AccountAvgAggregateOutputType | null;
    _sum: AccountSumAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
  };

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AccountGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof AccountGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>;
        }
      >
    >;

  export type AccountSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      type?: boolean;
      provider?: boolean;
      providerAccountId?: boolean;
      refresh_token?: boolean;
      access_token?: boolean;
      expires_at?: boolean;
      token_type?: boolean;
      scope?: boolean;
      id_token?: boolean;
      session_state?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["account"]
  >;

  export type AccountSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      type?: boolean;
      provider?: boolean;
      providerAccountId?: boolean;
      refresh_token?: boolean;
      access_token?: boolean;
      expires_at?: boolean;
      token_type?: boolean;
      scope?: boolean;
      id_token?: boolean;
      session_state?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["account"]
  >;

  export type AccountSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      type?: boolean;
      provider?: boolean;
      providerAccountId?: boolean;
      refresh_token?: boolean;
      access_token?: boolean;
      expires_at?: boolean;
      token_type?: boolean;
      scope?: boolean;
      id_token?: boolean;
      session_state?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["account"]
  >;

  export type AccountSelectScalar = {
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    provider?: boolean;
    providerAccountId?: boolean;
    refresh_token?: boolean;
    access_token?: boolean;
    expires_at?: boolean;
    token_type?: boolean;
    scope?: boolean;
    id_token?: boolean;
    session_state?: boolean;
  };

  export type AccountOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "type"
    | "provider"
    | "providerAccountId"
    | "refresh_token"
    | "access_token"
    | "expires_at"
    | "token_type"
    | "scope"
    | "id_token"
    | "session_state",
    ExtArgs["result"]["account"]
  >;
  export type AccountInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type AccountIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type AccountIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $AccountPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Account";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        type: string;
        provider: string;
        providerAccountId: string;
        refresh_token: string | null;
        access_token: string | null;
        expires_at: number | null;
        token_type: string | null;
        scope: string | null;
        id_token: string | null;
        session_state: string | null;
      },
      ExtArgs["result"]["account"]
    >;
    composites: {};
  };

  type AccountGetPayload<
    S extends boolean | null | undefined | AccountDefaultArgs,
  > = $Result.GetResult<Prisma.$AccountPayload, S>;

  type AccountCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AccountFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: AccountCountAggregateInputType | true;
  };

  export interface AccountDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Account"];
      meta: { name: "Account" };
    };
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     *
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     *
     */
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     *
     */
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
     **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AccountCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AccountAggregateArgs>(
      args: Subset<T, AccountAggregateArgs>,
    ): Prisma.PrismaPromise<GetAccountAggregateType<T>>;

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs["orderBy"] }
        : { orderBy?: AccountGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAccountGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Account model
     */
    readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", "String">;
    readonly userId: FieldRef<"Account", "String">;
    readonly type: FieldRef<"Account", "String">;
    readonly provider: FieldRef<"Account", "String">;
    readonly providerAccountId: FieldRef<"Account", "String">;
    readonly refresh_token: FieldRef<"Account", "String">;
    readonly access_token: FieldRef<"Account", "String">;
    readonly expires_at: FieldRef<"Account", "Int">;
    readonly token_type: FieldRef<"Account", "String">;
    readonly scope: FieldRef<"Account", "String">;
    readonly id_token: FieldRef<"Account", "String">;
    readonly session_state: FieldRef<"Account", "String">;
  }

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account create
   */
  export type AccountCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>;
  };

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Account update
   */
  export type AccountUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>;
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>;
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput;
    /**
     * Limit how many Accounts to update.
     */
    limit?: number;
  };

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>;
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput;
    /**
     * Limit how many Accounts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput;
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>;
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>;
  };

  /**
   * Account delete
   */
  export type AccountDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput;
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number;
  };

  /**
   * Account without action
   */
  export type AccountDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
  };

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
  };

  export type SessionMinAggregateOutputType = {
    id: string | null;
    sessionToken: string | null;
    userId: string | null;
    expires: Date | null;
  };

  export type SessionMaxAggregateOutputType = {
    id: string | null;
    sessionToken: string | null;
    userId: string | null;
    expires: Date | null;
  };

  export type SessionCountAggregateOutputType = {
    id: number;
    sessionToken: number;
    userId: number;
    expires: number;
    _all: number;
  };

  export type SessionMinAggregateInputType = {
    id?: true;
    sessionToken?: true;
    userId?: true;
    expires?: true;
  };

  export type SessionMaxAggregateInputType = {
    id?: true;
    sessionToken?: true;
    userId?: true;
    expires?: true;
  };

  export type SessionCountAggregateInputType = {
    id?: true;
    sessionToken?: true;
    userId?: true;
    expires?: true;
    _all?: true;
  };

  export type SessionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Sessions
     **/
    _count?: true | SessionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SessionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SessionMaxAggregateInputType;
  };

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
    [P in keyof T & keyof AggregateSession]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>;
  };

  export type SessionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SessionWhereInput;
    orderBy?:
      | SessionOrderByWithAggregationInput
      | SessionOrderByWithAggregationInput[];
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum;
    having?: SessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SessionCountAggregateInputType | true;
    _min?: SessionMinAggregateInputType;
    _max?: SessionMaxAggregateInputType;
  };

  export type SessionGroupByOutputType = {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Date;
    _count: SessionCountAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
  };

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SessionGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof SessionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>;
        }
      >
    >;

  export type SessionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sessionToken?: boolean;
      userId?: boolean;
      expires?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["session"]
  >;

  export type SessionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sessionToken?: boolean;
      userId?: boolean;
      expires?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["session"]
  >;

  export type SessionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sessionToken?: boolean;
      userId?: boolean;
      expires?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["session"]
  >;

  export type SessionSelectScalar = {
    id?: boolean;
    sessionToken?: boolean;
    userId?: boolean;
    expires?: boolean;
  };

  export type SessionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "sessionToken" | "userId" | "expires",
    ExtArgs["result"]["session"]
  >;
  export type SessionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type SessionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type SessionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $SessionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Session";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        sessionToken: string;
        userId: string;
        expires: Date;
      },
      ExtArgs["result"]["session"]
    >;
    composites: {};
  };

  type SessionGetPayload<
    S extends boolean | null | undefined | SessionDefaultArgs,
  > = $Result.GetResult<Prisma.$SessionPayload, S>;

  type SessionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<SessionFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: SessionCountAggregateInputType | true;
  };

  export interface SessionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Session"];
      meta: { name: "Session" };
    };
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     *
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     *
     */
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     *
     */
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
     **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], SessionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SessionAggregateArgs>(
      args: Subset<T, SessionAggregateArgs>,
    ): Prisma.PrismaPromise<GetSessionAggregateType<T>>;

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs["orderBy"] }
        : { orderBy?: SessionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetSessionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Session model
     */
    readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", "String">;
    readonly sessionToken: FieldRef<"Session", "String">;
    readonly userId: FieldRef<"Session", "String">;
    readonly expires: FieldRef<"Session", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[];
  };

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[];
  };

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[];
  };

  /**
   * Session create
   */
  export type SessionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>;
  };

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Session update
   */
  export type SessionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>;
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>;
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput;
    /**
     * Limit how many Sessions to update.
     */
    limit?: number;
  };

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>;
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput;
    /**
     * Limit how many Sessions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput;
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>;
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>;
  };

  /**
   * Session delete
   */
  export type SessionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput;
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number;
  };

  /**
   * Session without action
   */
  export type SessionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
  };

  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null;
    _min: VerificationTokenMinAggregateOutputType | null;
    _max: VerificationTokenMaxAggregateOutputType | null;
  };

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null;
    token: string | null;
    expires: Date | null;
  };

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null;
    token: string | null;
    expires: Date | null;
  };

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number;
    token: number;
    expires: number;
    _all: number;
  };

  export type VerificationTokenMinAggregateInputType = {
    identifier?: true;
    token?: true;
    expires?: true;
  };

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true;
    token?: true;
    expires?: true;
  };

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true;
    token?: true;
    expires?: true;
    _all?: true;
  };

  export type VerificationTokenAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?:
      | VerificationTokenOrderByWithRelationInput
      | VerificationTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VerificationTokens
     **/
    _count?: true | VerificationTokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VerificationTokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VerificationTokenMaxAggregateInputType;
  };

  export type GetVerificationTokenAggregateType<
    T extends VerificationTokenAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateVerificationToken]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>;
  };

  export type VerificationTokenGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: VerificationTokenWhereInput;
    orderBy?:
      | VerificationTokenOrderByWithAggregationInput
      | VerificationTokenOrderByWithAggregationInput[];
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum;
    having?: VerificationTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VerificationTokenCountAggregateInputType | true;
    _min?: VerificationTokenMinAggregateInputType;
    _max?: VerificationTokenMaxAggregateInputType;
  };

  export type VerificationTokenGroupByOutputType = {
    identifier: string;
    token: string;
    expires: Date;
    _count: VerificationTokenCountAggregateOutputType | null;
    _min: VerificationTokenMinAggregateOutputType | null;
    _max: VerificationTokenMaxAggregateOutputType | null;
  };

  type GetVerificationTokenGroupByPayload<
    T extends VerificationTokenGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof VerificationTokenGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
          : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>;
      }
    >
  >;

  export type VerificationTokenSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      identifier?: boolean;
      token?: boolean;
      expires?: boolean;
    },
    ExtArgs["result"]["verificationToken"]
  >;

  export type VerificationTokenSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      identifier?: boolean;
      token?: boolean;
      expires?: boolean;
    },
    ExtArgs["result"]["verificationToken"]
  >;

  export type VerificationTokenSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      identifier?: boolean;
      token?: boolean;
      expires?: boolean;
    },
    ExtArgs["result"]["verificationToken"]
  >;

  export type VerificationTokenSelectScalar = {
    identifier?: boolean;
    token?: boolean;
    expires?: boolean;
  };

  export type VerificationTokenOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "identifier" | "token" | "expires",
    ExtArgs["result"]["verificationToken"]
  >;

  export type $VerificationTokenPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "VerificationToken";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        identifier: string;
        token: string;
        expires: Date;
      },
      ExtArgs["result"]["verificationToken"]
    >;
    composites: {};
  };

  type VerificationTokenGetPayload<
    S extends boolean | null | undefined | VerificationTokenDefaultArgs,
  > = $Result.GetResult<Prisma.$VerificationTokenPayload, S>;

  type VerificationTokenCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    VerificationTokenFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: VerificationTokenCountAggregateInputType | true;
  };

  export interface VerificationTokenDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["VerificationToken"];
      meta: { name: "VerificationToken" };
    };
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>,
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<
        Prisma.$VerificationTokenPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(
      args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<
        Prisma.$VerificationTokenPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>,
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<
        Prisma.$VerificationTokenPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<
        Prisma.$VerificationTokenPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     *
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     *
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     *
     */
    findMany<T extends VerificationTokenFindManyArgs>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VerificationTokenPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     *
     */
    create<T extends VerificationTokenCreateArgs>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>,
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<
        Prisma.$VerificationTokenPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VerificationTokenCreateManyArgs>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(
      args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VerificationTokenPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     *
     */
    delete<T extends VerificationTokenDeleteArgs>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>,
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<
        Prisma.$VerificationTokenPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VerificationTokenUpdateArgs>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>,
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<
        Prisma.$VerificationTokenPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(
      args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VerificationTokenPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>,
    ): Prisma__VerificationTokenClient<
      $Result.GetResult<
        Prisma.$VerificationTokenPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
     **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<
              T["select"],
              VerificationTokenCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends VerificationTokenAggregateArgs>(
      args: Subset<T, VerificationTokenAggregateArgs>,
    ): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>;

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs["orderBy"] }
        : { orderBy?: VerificationTokenGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetVerificationTokenGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the VerificationToken model
     */
    readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", "String">;
    readonly token: FieldRef<"VerificationToken", "String">;
    readonly expires: FieldRef<"VerificationToken", "DateTime">;
  }

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null;
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput;
  };

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null;
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput;
  };

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null;
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?:
      | VerificationTokenOrderByWithRelationInput
      | VerificationTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?:
      | VerificationTokenScalarFieldEnum
      | VerificationTokenScalarFieldEnum[];
  };

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null;
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?:
      | VerificationTokenOrderByWithRelationInput
      | VerificationTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?:
      | VerificationTokenScalarFieldEnum
      | VerificationTokenScalarFieldEnum[];
  };

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null;
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?:
      | VerificationTokenOrderByWithRelationInput
      | VerificationTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VerificationTokens.
     */
    skip?: number;
    distinct?:
      | VerificationTokenScalarFieldEnum
      | VerificationTokenScalarFieldEnum[];
  };

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null;
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<
      VerificationTokenCreateInput,
      VerificationTokenUncheckedCreateInput
    >;
  };

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null;
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null;
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<
      VerificationTokenUpdateInput,
      VerificationTokenUncheckedUpdateInput
    >;
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput;
  };

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<
      VerificationTokenUpdateManyMutationInput,
      VerificationTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput;
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number;
  };

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null;
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<
      VerificationTokenUpdateManyMutationInput,
      VerificationTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput;
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number;
  };

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null;
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput;
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<
      VerificationTokenCreateInput,
      VerificationTokenUncheckedCreateInput
    >;
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      VerificationTokenUpdateInput,
      VerificationTokenUncheckedUpdateInput
    >;
  };

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null;
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput;
  };

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput;
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number;
  };

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null;
  };

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  export type ProjectMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    content: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    isPublic: boolean | null;
  };

  export type ProjectMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    content: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    isPublic: boolean | null;
  };

  export type ProjectCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    content: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    isPublic: number;
    _all: number;
  };

  export type ProjectMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    content?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    isPublic?: true;
  };

  export type ProjectMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    content?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    isPublic?: true;
  };

  export type ProjectCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    content?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    isPublic?: true;
    _all?: true;
  };

  export type ProjectAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?:
      | ProjectOrderByWithRelationInput
      | ProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Projects
     **/
    _count?: true | ProjectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProjectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProjectMaxAggregateInputType;
  };

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateProject]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>;
  };

  export type ProjectGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectWhereInput;
    orderBy?:
      | ProjectOrderByWithAggregationInput
      | ProjectOrderByWithAggregationInput[];
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum;
    having?: ProjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectCountAggregateInputType | true;
    _min?: ProjectMinAggregateInputType;
    _max?: ProjectMaxAggregateInputType;
  };

  export type ProjectGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    content: string | null;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    isPublic: boolean;
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProjectGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ProjectGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>;
        }
      >
    >;

  export type ProjectSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      content?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      isPublic?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      sharedWith?: boolean | Project$sharedWithArgs<ExtArgs>;
      invitations?: boolean | Project$invitationsArgs<ExtArgs>;
      exportHistory?: boolean | Project$exportHistoryArgs<ExtArgs>;
      writingAnalytics?: boolean | Project$writingAnalyticsArgs<ExtArgs>;
      aiInteractions?: boolean | Project$aiInteractionsArgs<ExtArgs>;
      _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["project"]
  >;

  export type ProjectSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      content?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      isPublic?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["project"]
  >;

  export type ProjectSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      content?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      isPublic?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["project"]
  >;

  export type ProjectSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    content?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    isPublic?: boolean;
  };

  export type ProjectOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "title"
    | "description"
    | "content"
    | "userId"
    | "createdAt"
    | "updatedAt"
    | "isPublic",
    ExtArgs["result"]["project"]
  >;
  export type ProjectInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    sharedWith?: boolean | Project$sharedWithArgs<ExtArgs>;
    invitations?: boolean | Project$invitationsArgs<ExtArgs>;
    exportHistory?: boolean | Project$exportHistoryArgs<ExtArgs>;
    writingAnalytics?: boolean | Project$writingAnalyticsArgs<ExtArgs>;
    aiInteractions?: boolean | Project$aiInteractionsArgs<ExtArgs>;
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ProjectIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ProjectIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ProjectPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Project";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      sharedWith: Prisma.$SharedProjectPayload<ExtArgs>[];
      invitations: Prisma.$ProjectInvitationPayload<ExtArgs>[];
      exportHistory: Prisma.$ExportHistoryPayload<ExtArgs>[];
      writingAnalytics: Prisma.$WritingAnalyticsPayload<ExtArgs> | null;
      aiInteractions: Prisma.$AiInteractionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        content: string | null;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        isPublic: boolean;
      },
      ExtArgs["result"]["project"]
    >;
    composites: {};
  };

  type ProjectGetPayload<
    S extends boolean | null | undefined | ProjectDefaultArgs,
  > = $Result.GetResult<Prisma.$ProjectPayload, S>;

  type ProjectCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProjectFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ProjectCountAggregateInputType | true;
  };

  export interface ProjectDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Project"];
      meta: { name: "Project" };
    };
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(
      args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(
      args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>,
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     *
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProjectFindManyArgs>(
      args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     *
     */
    create<T extends ProjectCreateArgs>(
      args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>,
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProjectCreateManyArgs>(
      args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     *
     */
    delete<T extends ProjectDeleteArgs>(
      args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>,
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProjectUpdateArgs>(
      args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>,
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProjectDeleteManyArgs>(
      args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProjectUpdateManyArgs>(
      args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(
      args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>,
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
     **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ProjectCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProjectAggregateArgs>(
      args: Subset<T, ProjectAggregateArgs>,
    ): Prisma.PrismaPromise<GetProjectAggregateType<T>>;

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs["orderBy"] }
        : { orderBy?: ProjectGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProjectGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Project model
     */
    readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    sharedWith<T extends Project$sharedWithArgs<ExtArgs> = {}>(
      args?: Subset<T, Project$sharedWithArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SharedProjectPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    invitations<T extends Project$invitationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Project$invitationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProjectInvitationPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    exportHistory<T extends Project$exportHistoryArgs<ExtArgs> = {}>(
      args?: Subset<T, Project$exportHistoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ExportHistoryPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    writingAnalytics<T extends Project$writingAnalyticsArgs<ExtArgs> = {}>(
      args?: Subset<T, Project$writingAnalyticsArgs<ExtArgs>>,
    ): Prisma__WritingAnalyticsClient<
      $Result.GetResult<
        Prisma.$WritingAnalyticsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    aiInteractions<T extends Project$aiInteractionsArgs<ExtArgs> = {}>(
      args?: Subset<T, Project$aiInteractionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AiInteractionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", "String">;
    readonly title: FieldRef<"Project", "String">;
    readonly description: FieldRef<"Project", "String">;
    readonly content: FieldRef<"Project", "String">;
    readonly userId: FieldRef<"Project", "String">;
    readonly createdAt: FieldRef<"Project", "DateTime">;
    readonly updatedAt: FieldRef<"Project", "DateTime">;
    readonly isPublic: FieldRef<"Project", "Boolean">;
  }

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput;
  };

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput;
  };

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?:
      | ProjectOrderByWithRelationInput
      | ProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?:
      | ProjectOrderByWithRelationInput
      | ProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?:
      | ProjectOrderByWithRelationInput
      | ProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * Project create
   */
  export type ProjectCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>;
  };

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Project update
   */
  export type ProjectUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>;
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput;
  };

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>;
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput;
    /**
     * Limit how many Projects to update.
     */
    limit?: number;
  };

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>;
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput;
    /**
     * Limit how many Projects to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput;
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>;
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>;
  };

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput;
  };

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput;
    /**
     * Limit how many Projects to delete.
     */
    limit?: number;
  };

  /**
   * Project.sharedWith
   */
  export type Project$sharedWithArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedProject
     */
    select?: SharedProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedProject
     */
    omit?: SharedProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedProjectInclude<ExtArgs> | null;
    where?: SharedProjectWhereInput;
    orderBy?:
      | SharedProjectOrderByWithRelationInput
      | SharedProjectOrderByWithRelationInput[];
    cursor?: SharedProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SharedProjectScalarFieldEnum | SharedProjectScalarFieldEnum[];
  };

  /**
   * Project.invitations
   */
  export type Project$invitationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null;
    where?: ProjectInvitationWhereInput;
    orderBy?:
      | ProjectInvitationOrderByWithRelationInput
      | ProjectInvitationOrderByWithRelationInput[];
    cursor?: ProjectInvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | ProjectInvitationScalarFieldEnum
      | ProjectInvitationScalarFieldEnum[];
  };

  /**
   * Project.exportHistory
   */
  export type Project$exportHistoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportHistoryInclude<ExtArgs> | null;
    where?: ExportHistoryWhereInput;
    orderBy?:
      | ExportHistoryOrderByWithRelationInput
      | ExportHistoryOrderByWithRelationInput[];
    cursor?: ExportHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ExportHistoryScalarFieldEnum | ExportHistoryScalarFieldEnum[];
  };

  /**
   * Project.writingAnalytics
   */
  export type Project$writingAnalyticsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WritingAnalytics
     */
    select?: WritingAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WritingAnalytics
     */
    omit?: WritingAnalyticsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingAnalyticsInclude<ExtArgs> | null;
    where?: WritingAnalyticsWhereInput;
  };

  /**
   * Project.aiInteractions
   */
  export type Project$aiInteractionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiInteraction
     */
    select?: AiInteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiInteraction
     */
    omit?: AiInteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInteractionInclude<ExtArgs> | null;
    where?: AiInteractionWhereInput;
    orderBy?:
      | AiInteractionOrderByWithRelationInput
      | AiInteractionOrderByWithRelationInput[];
    cursor?: AiInteractionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AiInteractionScalarFieldEnum | AiInteractionScalarFieldEnum[];
  };

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null;
  };

  /**
   * Model UserPreference
   */

  export type AggregateUserPreference = {
    _count: UserPreferenceCountAggregateOutputType | null;
    _avg: UserPreferenceAvgAggregateOutputType | null;
    _sum: UserPreferenceSumAggregateOutputType | null;
    _min: UserPreferenceMinAggregateOutputType | null;
    _max: UserPreferenceMaxAggregateOutputType | null;
  };

  export type UserPreferenceAvgAggregateOutputType = {
    fontSize: number | null;
  };

  export type UserPreferenceSumAggregateOutputType = {
    fontSize: number | null;
  };

  export type UserPreferenceMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    theme: string | null;
    emailNotifications: boolean | null;
    aiSuggestions: boolean | null;
    autoSave: boolean | null;
    fontSize: number | null;
    editorFontFamily: string | null;
  };

  export type UserPreferenceMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    theme: string | null;
    emailNotifications: boolean | null;
    aiSuggestions: boolean | null;
    autoSave: boolean | null;
    fontSize: number | null;
    editorFontFamily: string | null;
  };

  export type UserPreferenceCountAggregateOutputType = {
    id: number;
    userId: number;
    theme: number;
    emailNotifications: number;
    aiSuggestions: number;
    autoSave: number;
    fontSize: number;
    editorFontFamily: number;
    _all: number;
  };

  export type UserPreferenceAvgAggregateInputType = {
    fontSize?: true;
  };

  export type UserPreferenceSumAggregateInputType = {
    fontSize?: true;
  };

  export type UserPreferenceMinAggregateInputType = {
    id?: true;
    userId?: true;
    theme?: true;
    emailNotifications?: true;
    aiSuggestions?: true;
    autoSave?: true;
    fontSize?: true;
    editorFontFamily?: true;
  };

  export type UserPreferenceMaxAggregateInputType = {
    id?: true;
    userId?: true;
    theme?: true;
    emailNotifications?: true;
    aiSuggestions?: true;
    autoSave?: true;
    fontSize?: true;
    editorFontFamily?: true;
  };

  export type UserPreferenceCountAggregateInputType = {
    id?: true;
    userId?: true;
    theme?: true;
    emailNotifications?: true;
    aiSuggestions?: true;
    autoSave?: true;
    fontSize?: true;
    editorFontFamily?: true;
    _all?: true;
  };

  export type UserPreferenceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserPreference to aggregate.
     */
    where?: UserPreferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?:
      | UserPreferenceOrderByWithRelationInput
      | UserPreferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserPreferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserPreferences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserPreferences
     **/
    _count?: true | UserPreferenceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserPreferenceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserPreferenceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserPreferenceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserPreferenceMaxAggregateInputType;
  };

  export type GetUserPreferenceAggregateType<
    T extends UserPreferenceAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateUserPreference]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreference[P]>
      : GetScalarType<T[P], AggregateUserPreference[P]>;
  };

  export type UserPreferenceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserPreferenceWhereInput;
    orderBy?:
      | UserPreferenceOrderByWithAggregationInput
      | UserPreferenceOrderByWithAggregationInput[];
    by: UserPreferenceScalarFieldEnum[] | UserPreferenceScalarFieldEnum;
    having?: UserPreferenceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserPreferenceCountAggregateInputType | true;
    _avg?: UserPreferenceAvgAggregateInputType;
    _sum?: UserPreferenceSumAggregateInputType;
    _min?: UserPreferenceMinAggregateInputType;
    _max?: UserPreferenceMaxAggregateInputType;
  };

  export type UserPreferenceGroupByOutputType = {
    id: string;
    userId: string;
    theme: string;
    emailNotifications: boolean;
    aiSuggestions: boolean;
    autoSave: boolean;
    fontSize: number;
    editorFontFamily: string;
    _count: UserPreferenceCountAggregateOutputType | null;
    _avg: UserPreferenceAvgAggregateOutputType | null;
    _sum: UserPreferenceSumAggregateOutputType | null;
    _min: UserPreferenceMinAggregateOutputType | null;
    _max: UserPreferenceMaxAggregateOutputType | null;
  };

  type GetUserPreferenceGroupByPayload<T extends UserPreferenceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UserPreferenceGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof UserPreferenceGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>;
        }
      >
    >;

  export type UserPreferenceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      theme?: boolean;
      emailNotifications?: boolean;
      aiSuggestions?: boolean;
      autoSave?: boolean;
      fontSize?: boolean;
      editorFontFamily?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userPreference"]
  >;

  export type UserPreferenceSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      theme?: boolean;
      emailNotifications?: boolean;
      aiSuggestions?: boolean;
      autoSave?: boolean;
      fontSize?: boolean;
      editorFontFamily?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userPreference"]
  >;

  export type UserPreferenceSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      theme?: boolean;
      emailNotifications?: boolean;
      aiSuggestions?: boolean;
      autoSave?: boolean;
      fontSize?: boolean;
      editorFontFamily?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userPreference"]
  >;

  export type UserPreferenceSelectScalar = {
    id?: boolean;
    userId?: boolean;
    theme?: boolean;
    emailNotifications?: boolean;
    aiSuggestions?: boolean;
    autoSave?: boolean;
    fontSize?: boolean;
    editorFontFamily?: boolean;
  };

  export type UserPreferenceOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "theme"
    | "emailNotifications"
    | "aiSuggestions"
    | "autoSave"
    | "fontSize"
    | "editorFontFamily",
    ExtArgs["result"]["userPreference"]
  >;
  export type UserPreferenceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type UserPreferenceIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type UserPreferenceIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $UserPreferencePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "UserPreference";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        theme: string;
        emailNotifications: boolean;
        aiSuggestions: boolean;
        autoSave: boolean;
        fontSize: number;
        editorFontFamily: string;
      },
      ExtArgs["result"]["userPreference"]
    >;
    composites: {};
  };

  type UserPreferenceGetPayload<
    S extends boolean | null | undefined | UserPreferenceDefaultArgs,
  > = $Result.GetResult<Prisma.$UserPreferencePayload, S>;

  type UserPreferenceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    UserPreferenceFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: UserPreferenceCountAggregateInputType | true;
  };

  export interface UserPreferenceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["UserPreference"];
      meta: { name: "UserPreference" };
    };
    /**
     * Find zero or one UserPreference that matches the filter.
     * @param {UserPreferenceFindUniqueArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferenceFindUniqueArgs>(
      args: SelectSubset<T, UserPreferenceFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one UserPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferenceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserPreferenceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferenceFindFirstArgs>(
      args?: SelectSubset<T, UserPreferenceFindFirstArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferenceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserPreferenceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreference.findMany()
     *
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreference.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserPreferenceFindManyArgs>(
      args?: SelectSubset<T, UserPreferenceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a UserPreference.
     * @param {UserPreferenceCreateArgs} args - Arguments to create a UserPreference.
     * @example
     * // Create one UserPreference
     * const UserPreference = await prisma.userPreference.create({
     *   data: {
     *     // ... data to create a UserPreference
     *   }
     * })
     *
     */
    create<T extends UserPreferenceCreateArgs>(
      args: SelectSubset<T, UserPreferenceCreateArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many UserPreferences.
     * @param {UserPreferenceCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserPreferenceCreateManyArgs>(
      args?: SelectSubset<T, UserPreferenceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferenceCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserPreferenceCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserPreferenceCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a UserPreference.
     * @param {UserPreferenceDeleteArgs} args - Arguments to delete one UserPreference.
     * @example
     * // Delete one UserPreference
     * const UserPreference = await prisma.userPreference.delete({
     *   where: {
     *     // ... filter to delete one UserPreference
     *   }
     * })
     *
     */
    delete<T extends UserPreferenceDeleteArgs>(
      args: SelectSubset<T, UserPreferenceDeleteArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one UserPreference.
     * @param {UserPreferenceUpdateArgs} args - Arguments to update one UserPreference.
     * @example
     * // Update one UserPreference
     * const userPreference = await prisma.userPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserPreferenceUpdateArgs>(
      args: SelectSubset<T, UserPreferenceUpdateArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferenceDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserPreferenceDeleteManyArgs>(
      args?: SelectSubset<T, UserPreferenceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserPreferenceUpdateManyArgs>(
      args: SelectSubset<T, UserPreferenceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferenceUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserPreferenceUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserPreferenceUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one UserPreference.
     * @param {UserPreferenceUpsertArgs} args - Arguments to update or create a UserPreference.
     * @example
     * // Update or create a UserPreference
     * const userPreference = await prisma.userPreference.upsert({
     *   create: {
     *     // ... data to create a UserPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreference we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferenceUpsertArgs>(
      args: SelectSubset<T, UserPreferenceUpsertArgs<ExtArgs>>,
    ): Prisma__UserPreferenceClient<
      $Result.GetResult<
        Prisma.$UserPreferencePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreference.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
     **/
    count<T extends UserPreferenceCountArgs>(
      args?: Subset<T, UserPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserPreferenceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserPreferenceAggregateArgs>(
      args: Subset<T, UserPreferenceAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserPreferenceAggregateType<T>>;

    /**
     * Group by UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferenceGroupByArgs["orderBy"] }
        : { orderBy?: UserPreferenceGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserPreferenceGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUserPreferenceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserPreference model
     */
    readonly fields: UserPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferenceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the UserPreference model
   */
  interface UserPreferenceFieldRefs {
    readonly id: FieldRef<"UserPreference", "String">;
    readonly userId: FieldRef<"UserPreference", "String">;
    readonly theme: FieldRef<"UserPreference", "String">;
    readonly emailNotifications: FieldRef<"UserPreference", "Boolean">;
    readonly aiSuggestions: FieldRef<"UserPreference", "Boolean">;
    readonly autoSave: FieldRef<"UserPreference", "Boolean">;
    readonly fontSize: FieldRef<"UserPreference", "Int">;
    readonly editorFontFamily: FieldRef<"UserPreference", "String">;
  }

  // Custom InputTypes
  /**
   * UserPreference findUnique
   */
  export type UserPreferenceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput;
  };

  /**
   * UserPreference findUniqueOrThrow
   */
  export type UserPreferenceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput;
  };

  /**
   * UserPreference findFirst
   */
  export type UserPreferenceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?:
      | UserPreferenceOrderByWithRelationInput
      | UserPreferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserPreferences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[];
  };

  /**
   * UserPreference findFirstOrThrow
   */
  export type UserPreferenceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?:
      | UserPreferenceOrderByWithRelationInput
      | UserPreferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserPreferences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[];
  };

  /**
   * UserPreference findMany
   */
  export type UserPreferenceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?:
      | UserPreferenceOrderByWithRelationInput
      | UserPreferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserPreferences.
     */
    skip?: number;
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[];
  };

  /**
   * UserPreference create
   */
  export type UserPreferenceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * The data needed to create a UserPreference.
     */
    data: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>;
  };

  /**
   * UserPreference createMany
   */
  export type UserPreferenceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserPreference createManyAndReturn
   */
  export type UserPreferenceCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserPreference update
   */
  export type UserPreferenceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * The data needed to update a UserPreference.
     */
    data: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>;
    /**
     * Choose, which UserPreference to update.
     */
    where: UserPreferenceWhereUniqueInput;
  };

  /**
   * UserPreference updateMany
   */
  export type UserPreferenceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<
      UserPreferenceUpdateManyMutationInput,
      UserPreferenceUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput;
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number;
  };

  /**
   * UserPreference updateManyAndReturn
   */
  export type UserPreferenceUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<
      UserPreferenceUpdateManyMutationInput,
      UserPreferenceUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput;
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserPreference upsert
   */
  export type UserPreferenceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * The filter to search for the UserPreference to update in case it exists.
     */
    where: UserPreferenceWhereUniqueInput;
    /**
     * In case the UserPreference found by the `where` argument doesn't exist, create a new UserPreference with this data.
     */
    create: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>;
    /**
     * In case the UserPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>;
  };

  /**
   * UserPreference delete
   */
  export type UserPreferenceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
    /**
     * Filter which UserPreference to delete.
     */
    where: UserPreferenceWhereUniqueInput;
  };

  /**
   * UserPreference deleteMany
   */
  export type UserPreferenceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferenceWhereInput;
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number;
  };

  /**
   * UserPreference without action
   */
  export type UserPreferenceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null;
  };

  /**
   * Model ApiUsage
   */

  export type AggregateApiUsage = {
    _count: ApiUsageCountAggregateOutputType | null;
    _avg: ApiUsageAvgAggregateOutputType | null;
    _sum: ApiUsageSumAggregateOutputType | null;
    _min: ApiUsageMinAggregateOutputType | null;
    _max: ApiUsageMaxAggregateOutputType | null;
  };

  export type ApiUsageAvgAggregateOutputType = {
    totalTokensUsed: number | null;
    monthlyTokensUsed: number | null;
  };

  export type ApiUsageSumAggregateOutputType = {
    totalTokensUsed: number | null;
    monthlyTokensUsed: number | null;
  };

  export type ApiUsageMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    totalTokensUsed: number | null;
    monthlyTokensUsed: number | null;
    lastResetDate: Date | null;
  };

  export type ApiUsageMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    totalTokensUsed: number | null;
    monthlyTokensUsed: number | null;
    lastResetDate: Date | null;
  };

  export type ApiUsageCountAggregateOutputType = {
    id: number;
    userId: number;
    totalTokensUsed: number;
    monthlyTokensUsed: number;
    lastResetDate: number;
    _all: number;
  };

  export type ApiUsageAvgAggregateInputType = {
    totalTokensUsed?: true;
    monthlyTokensUsed?: true;
  };

  export type ApiUsageSumAggregateInputType = {
    totalTokensUsed?: true;
    monthlyTokensUsed?: true;
  };

  export type ApiUsageMinAggregateInputType = {
    id?: true;
    userId?: true;
    totalTokensUsed?: true;
    monthlyTokensUsed?: true;
    lastResetDate?: true;
  };

  export type ApiUsageMaxAggregateInputType = {
    id?: true;
    userId?: true;
    totalTokensUsed?: true;
    monthlyTokensUsed?: true;
    lastResetDate?: true;
  };

  export type ApiUsageCountAggregateInputType = {
    id?: true;
    userId?: true;
    totalTokensUsed?: true;
    monthlyTokensUsed?: true;
    lastResetDate?: true;
    _all?: true;
  };

  export type ApiUsageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ApiUsage to aggregate.
     */
    where?: ApiUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApiUsages to fetch.
     */
    orderBy?:
      | ApiUsageOrderByWithRelationInput
      | ApiUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ApiUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApiUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApiUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ApiUsages
     **/
    _count?: true | ApiUsageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ApiUsageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ApiUsageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ApiUsageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ApiUsageMaxAggregateInputType;
  };

  export type GetApiUsageAggregateType<T extends ApiUsageAggregateArgs> = {
    [P in keyof T & keyof AggregateApiUsage]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiUsage[P]>
      : GetScalarType<T[P], AggregateApiUsage[P]>;
  };

  export type ApiUsageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ApiUsageWhereInput;
    orderBy?:
      | ApiUsageOrderByWithAggregationInput
      | ApiUsageOrderByWithAggregationInput[];
    by: ApiUsageScalarFieldEnum[] | ApiUsageScalarFieldEnum;
    having?: ApiUsageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApiUsageCountAggregateInputType | true;
    _avg?: ApiUsageAvgAggregateInputType;
    _sum?: ApiUsageSumAggregateInputType;
    _min?: ApiUsageMinAggregateInputType;
    _max?: ApiUsageMaxAggregateInputType;
  };

  export type ApiUsageGroupByOutputType = {
    id: string;
    userId: string;
    totalTokensUsed: number;
    monthlyTokensUsed: number;
    lastResetDate: Date;
    _count: ApiUsageCountAggregateOutputType | null;
    _avg: ApiUsageAvgAggregateOutputType | null;
    _sum: ApiUsageSumAggregateOutputType | null;
    _min: ApiUsageMinAggregateOutputType | null;
    _max: ApiUsageMaxAggregateOutputType | null;
  };

  type GetApiUsageGroupByPayload<T extends ApiUsageGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ApiUsageGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ApiUsageGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiUsageGroupByOutputType[P]>
            : GetScalarType<T[P], ApiUsageGroupByOutputType[P]>;
        }
      >
    >;

  export type ApiUsageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      totalTokensUsed?: boolean;
      monthlyTokensUsed?: boolean;
      lastResetDate?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["apiUsage"]
  >;

  export type ApiUsageSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      totalTokensUsed?: boolean;
      monthlyTokensUsed?: boolean;
      lastResetDate?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["apiUsage"]
  >;

  export type ApiUsageSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      totalTokensUsed?: boolean;
      monthlyTokensUsed?: boolean;
      lastResetDate?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["apiUsage"]
  >;

  export type ApiUsageSelectScalar = {
    id?: boolean;
    userId?: boolean;
    totalTokensUsed?: boolean;
    monthlyTokensUsed?: boolean;
    lastResetDate?: boolean;
  };

  export type ApiUsageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "userId" | "totalTokensUsed" | "monthlyTokensUsed" | "lastResetDate",
    ExtArgs["result"]["apiUsage"]
  >;
  export type ApiUsageInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ApiUsageIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ApiUsageIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ApiUsagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "ApiUsage";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        totalTokensUsed: number;
        monthlyTokensUsed: number;
        lastResetDate: Date;
      },
      ExtArgs["result"]["apiUsage"]
    >;
    composites: {};
  };

  type ApiUsageGetPayload<
    S extends boolean | null | undefined | ApiUsageDefaultArgs,
  > = $Result.GetResult<Prisma.$ApiUsagePayload, S>;

  type ApiUsageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ApiUsageFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ApiUsageCountAggregateInputType | true;
  };

  export interface ApiUsageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ApiUsage"];
      meta: { name: "ApiUsage" };
    };
    /**
     * Find zero or one ApiUsage that matches the filter.
     * @param {ApiUsageFindUniqueArgs} args - Arguments to find a ApiUsage
     * @example
     * // Get one ApiUsage
     * const apiUsage = await prisma.apiUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiUsageFindUniqueArgs>(
      args: SelectSubset<T, ApiUsageFindUniqueArgs<ExtArgs>>,
    ): Prisma__ApiUsageClient<
      $Result.GetResult<
        Prisma.$ApiUsagePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ApiUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiUsageFindUniqueOrThrowArgs} args - Arguments to find a ApiUsage
     * @example
     * // Get one ApiUsage
     * const apiUsage = await prisma.apiUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiUsageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ApiUsageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ApiUsageClient<
      $Result.GetResult<
        Prisma.$ApiUsagePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ApiUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageFindFirstArgs} args - Arguments to find a ApiUsage
     * @example
     * // Get one ApiUsage
     * const apiUsage = await prisma.apiUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiUsageFindFirstArgs>(
      args?: SelectSubset<T, ApiUsageFindFirstArgs<ExtArgs>>,
    ): Prisma__ApiUsageClient<
      $Result.GetResult<
        Prisma.$ApiUsagePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ApiUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageFindFirstOrThrowArgs} args - Arguments to find a ApiUsage
     * @example
     * // Get one ApiUsage
     * const apiUsage = await prisma.apiUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiUsageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ApiUsageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ApiUsageClient<
      $Result.GetResult<
        Prisma.$ApiUsagePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ApiUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiUsages
     * const apiUsages = await prisma.apiUsage.findMany()
     *
     * // Get first 10 ApiUsages
     * const apiUsages = await prisma.apiUsage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const apiUsageWithIdOnly = await prisma.apiUsage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ApiUsageFindManyArgs>(
      args?: SelectSubset<T, ApiUsageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ApiUsagePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ApiUsage.
     * @param {ApiUsageCreateArgs} args - Arguments to create a ApiUsage.
     * @example
     * // Create one ApiUsage
     * const ApiUsage = await prisma.apiUsage.create({
     *   data: {
     *     // ... data to create a ApiUsage
     *   }
     * })
     *
     */
    create<T extends ApiUsageCreateArgs>(
      args: SelectSubset<T, ApiUsageCreateArgs<ExtArgs>>,
    ): Prisma__ApiUsageClient<
      $Result.GetResult<
        Prisma.$ApiUsagePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ApiUsages.
     * @param {ApiUsageCreateManyArgs} args - Arguments to create many ApiUsages.
     * @example
     * // Create many ApiUsages
     * const apiUsage = await prisma.apiUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ApiUsageCreateManyArgs>(
      args?: SelectSubset<T, ApiUsageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ApiUsages and returns the data saved in the database.
     * @param {ApiUsageCreateManyAndReturnArgs} args - Arguments to create many ApiUsages.
     * @example
     * // Create many ApiUsages
     * const apiUsage = await prisma.apiUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ApiUsages and only return the `id`
     * const apiUsageWithIdOnly = await prisma.apiUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ApiUsageCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ApiUsageCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ApiUsagePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ApiUsage.
     * @param {ApiUsageDeleteArgs} args - Arguments to delete one ApiUsage.
     * @example
     * // Delete one ApiUsage
     * const ApiUsage = await prisma.apiUsage.delete({
     *   where: {
     *     // ... filter to delete one ApiUsage
     *   }
     * })
     *
     */
    delete<T extends ApiUsageDeleteArgs>(
      args: SelectSubset<T, ApiUsageDeleteArgs<ExtArgs>>,
    ): Prisma__ApiUsageClient<
      $Result.GetResult<
        Prisma.$ApiUsagePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ApiUsage.
     * @param {ApiUsageUpdateArgs} args - Arguments to update one ApiUsage.
     * @example
     * // Update one ApiUsage
     * const apiUsage = await prisma.apiUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ApiUsageUpdateArgs>(
      args: SelectSubset<T, ApiUsageUpdateArgs<ExtArgs>>,
    ): Prisma__ApiUsageClient<
      $Result.GetResult<
        Prisma.$ApiUsagePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ApiUsages.
     * @param {ApiUsageDeleteManyArgs} args - Arguments to filter ApiUsages to delete.
     * @example
     * // Delete a few ApiUsages
     * const { count } = await prisma.apiUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ApiUsageDeleteManyArgs>(
      args?: SelectSubset<T, ApiUsageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ApiUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiUsages
     * const apiUsage = await prisma.apiUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ApiUsageUpdateManyArgs>(
      args: SelectSubset<T, ApiUsageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ApiUsages and returns the data updated in the database.
     * @param {ApiUsageUpdateManyAndReturnArgs} args - Arguments to update many ApiUsages.
     * @example
     * // Update many ApiUsages
     * const apiUsage = await prisma.apiUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ApiUsages and only return the `id`
     * const apiUsageWithIdOnly = await prisma.apiUsage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ApiUsageUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ApiUsageUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ApiUsagePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ApiUsage.
     * @param {ApiUsageUpsertArgs} args - Arguments to update or create a ApiUsage.
     * @example
     * // Update or create a ApiUsage
     * const apiUsage = await prisma.apiUsage.upsert({
     *   create: {
     *     // ... data to create a ApiUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiUsage we want to update
     *   }
     * })
     */
    upsert<T extends ApiUsageUpsertArgs>(
      args: SelectSubset<T, ApiUsageUpsertArgs<ExtArgs>>,
    ): Prisma__ApiUsageClient<
      $Result.GetResult<
        Prisma.$ApiUsagePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ApiUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageCountArgs} args - Arguments to filter ApiUsages to count.
     * @example
     * // Count the number of ApiUsages
     * const count = await prisma.apiUsage.count({
     *   where: {
     *     // ... the filter for the ApiUsages we want to count
     *   }
     * })
     **/
    count<T extends ApiUsageCountArgs>(
      args?: Subset<T, ApiUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ApiUsageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ApiUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ApiUsageAggregateArgs>(
      args: Subset<T, ApiUsageAggregateArgs>,
    ): Prisma.PrismaPromise<GetApiUsageAggregateType<T>>;

    /**
     * Group by ApiUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ApiUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiUsageGroupByArgs["orderBy"] }
        : { orderBy?: ApiUsageGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ApiUsageGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetApiUsageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ApiUsage model
     */
    readonly fields: ApiUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiUsageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ApiUsage model
   */
  interface ApiUsageFieldRefs {
    readonly id: FieldRef<"ApiUsage", "String">;
    readonly userId: FieldRef<"ApiUsage", "String">;
    readonly totalTokensUsed: FieldRef<"ApiUsage", "Int">;
    readonly monthlyTokensUsed: FieldRef<"ApiUsage", "Int">;
    readonly lastResetDate: FieldRef<"ApiUsage", "DateTime">;
  }

  // Custom InputTypes
  /**
   * ApiUsage findUnique
   */
  export type ApiUsageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null;
    /**
     * Filter, which ApiUsage to fetch.
     */
    where: ApiUsageWhereUniqueInput;
  };

  /**
   * ApiUsage findUniqueOrThrow
   */
  export type ApiUsageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null;
    /**
     * Filter, which ApiUsage to fetch.
     */
    where: ApiUsageWhereUniqueInput;
  };

  /**
   * ApiUsage findFirst
   */
  export type ApiUsageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null;
    /**
     * Filter, which ApiUsage to fetch.
     */
    where?: ApiUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApiUsages to fetch.
     */
    orderBy?:
      | ApiUsageOrderByWithRelationInput
      | ApiUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ApiUsages.
     */
    cursor?: ApiUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApiUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApiUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApiUsages.
     */
    distinct?: ApiUsageScalarFieldEnum | ApiUsageScalarFieldEnum[];
  };

  /**
   * ApiUsage findFirstOrThrow
   */
  export type ApiUsageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null;
    /**
     * Filter, which ApiUsage to fetch.
     */
    where?: ApiUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApiUsages to fetch.
     */
    orderBy?:
      | ApiUsageOrderByWithRelationInput
      | ApiUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ApiUsages.
     */
    cursor?: ApiUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApiUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApiUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApiUsages.
     */
    distinct?: ApiUsageScalarFieldEnum | ApiUsageScalarFieldEnum[];
  };

  /**
   * ApiUsage findMany
   */
  export type ApiUsageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null;
    /**
     * Filter, which ApiUsages to fetch.
     */
    where?: ApiUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApiUsages to fetch.
     */
    orderBy?:
      | ApiUsageOrderByWithRelationInput
      | ApiUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ApiUsages.
     */
    cursor?: ApiUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApiUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApiUsages.
     */
    skip?: number;
    distinct?: ApiUsageScalarFieldEnum | ApiUsageScalarFieldEnum[];
  };

  /**
   * ApiUsage create
   */
  export type ApiUsageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null;
    /**
     * The data needed to create a ApiUsage.
     */
    data: XOR<ApiUsageCreateInput, ApiUsageUncheckedCreateInput>;
  };

  /**
   * ApiUsage createMany
   */
  export type ApiUsageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ApiUsages.
     */
    data: ApiUsageCreateManyInput | ApiUsageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ApiUsage createManyAndReturn
   */
  export type ApiUsageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null;
    /**
     * The data used to create many ApiUsages.
     */
    data: ApiUsageCreateManyInput | ApiUsageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ApiUsage update
   */
  export type ApiUsageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null;
    /**
     * The data needed to update a ApiUsage.
     */
    data: XOR<ApiUsageUpdateInput, ApiUsageUncheckedUpdateInput>;
    /**
     * Choose, which ApiUsage to update.
     */
    where: ApiUsageWhereUniqueInput;
  };

  /**
   * ApiUsage updateMany
   */
  export type ApiUsageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ApiUsages.
     */
    data: XOR<
      ApiUsageUpdateManyMutationInput,
      ApiUsageUncheckedUpdateManyInput
    >;
    /**
     * Filter which ApiUsages to update
     */
    where?: ApiUsageWhereInput;
    /**
     * Limit how many ApiUsages to update.
     */
    limit?: number;
  };

  /**
   * ApiUsage updateManyAndReturn
   */
  export type ApiUsageUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null;
    /**
     * The data used to update ApiUsages.
     */
    data: XOR<
      ApiUsageUpdateManyMutationInput,
      ApiUsageUncheckedUpdateManyInput
    >;
    /**
     * Filter which ApiUsages to update
     */
    where?: ApiUsageWhereInput;
    /**
     * Limit how many ApiUsages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ApiUsage upsert
   */
  export type ApiUsageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null;
    /**
     * The filter to search for the ApiUsage to update in case it exists.
     */
    where: ApiUsageWhereUniqueInput;
    /**
     * In case the ApiUsage found by the `where` argument doesn't exist, create a new ApiUsage with this data.
     */
    create: XOR<ApiUsageCreateInput, ApiUsageUncheckedCreateInput>;
    /**
     * In case the ApiUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiUsageUpdateInput, ApiUsageUncheckedUpdateInput>;
  };

  /**
   * ApiUsage delete
   */
  export type ApiUsageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null;
    /**
     * Filter which ApiUsage to delete.
     */
    where: ApiUsageWhereUniqueInput;
  };

  /**
   * ApiUsage deleteMany
   */
  export type ApiUsageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ApiUsages to delete
     */
    where?: ApiUsageWhereInput;
    /**
     * Limit how many ApiUsages to delete.
     */
    limit?: number;
  };

  /**
   * ApiUsage without action
   */
  export type ApiUsageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null;
  };

  /**
   * Model SharedProject
   */

  export type AggregateSharedProject = {
    _count: SharedProjectCountAggregateOutputType | null;
    _min: SharedProjectMinAggregateOutputType | null;
    _max: SharedProjectMaxAggregateOutputType | null;
  };

  export type SharedProjectMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    userId: string | null;
    permissions: string | null;
    createdAt: Date | null;
  };

  export type SharedProjectMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    userId: string | null;
    permissions: string | null;
    createdAt: Date | null;
  };

  export type SharedProjectCountAggregateOutputType = {
    id: number;
    projectId: number;
    userId: number;
    permissions: number;
    createdAt: number;
    _all: number;
  };

  export type SharedProjectMinAggregateInputType = {
    id?: true;
    projectId?: true;
    userId?: true;
    permissions?: true;
    createdAt?: true;
  };

  export type SharedProjectMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    userId?: true;
    permissions?: true;
    createdAt?: true;
  };

  export type SharedProjectCountAggregateInputType = {
    id?: true;
    projectId?: true;
    userId?: true;
    permissions?: true;
    createdAt?: true;
    _all?: true;
  };

  export type SharedProjectAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SharedProject to aggregate.
     */
    where?: SharedProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SharedProjects to fetch.
     */
    orderBy?:
      | SharedProjectOrderByWithRelationInput
      | SharedProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SharedProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SharedProjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SharedProjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SharedProjects
     **/
    _count?: true | SharedProjectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SharedProjectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SharedProjectMaxAggregateInputType;
  };

  export type GetSharedProjectAggregateType<
    T extends SharedProjectAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateSharedProject]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedProject[P]>
      : GetScalarType<T[P], AggregateSharedProject[P]>;
  };

  export type SharedProjectGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SharedProjectWhereInput;
    orderBy?:
      | SharedProjectOrderByWithAggregationInput
      | SharedProjectOrderByWithAggregationInput[];
    by: SharedProjectScalarFieldEnum[] | SharedProjectScalarFieldEnum;
    having?: SharedProjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SharedProjectCountAggregateInputType | true;
    _min?: SharedProjectMinAggregateInputType;
    _max?: SharedProjectMaxAggregateInputType;
  };

  export type SharedProjectGroupByOutputType = {
    id: string;
    projectId: string;
    userId: string;
    permissions: string;
    createdAt: Date;
    _count: SharedProjectCountAggregateOutputType | null;
    _min: SharedProjectMinAggregateOutputType | null;
    _max: SharedProjectMaxAggregateOutputType | null;
  };

  type GetSharedProjectGroupByPayload<T extends SharedProjectGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SharedProjectGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof SharedProjectGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedProjectGroupByOutputType[P]>
            : GetScalarType<T[P], SharedProjectGroupByOutputType[P]>;
        }
      >
    >;

  export type SharedProjectSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      userId?: boolean;
      permissions?: boolean;
      createdAt?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["sharedProject"]
  >;

  export type SharedProjectSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      userId?: boolean;
      permissions?: boolean;
      createdAt?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["sharedProject"]
  >;

  export type SharedProjectSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      userId?: boolean;
      permissions?: boolean;
      createdAt?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["sharedProject"]
  >;

  export type SharedProjectSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    userId?: boolean;
    permissions?: boolean;
    createdAt?: boolean;
  };

  export type SharedProjectOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "projectId" | "userId" | "permissions" | "createdAt",
    ExtArgs["result"]["sharedProject"]
  >;
  export type SharedProjectInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type SharedProjectIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type SharedProjectIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $SharedProjectPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "SharedProject";
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        projectId: string;
        userId: string;
        permissions: string;
        createdAt: Date;
      },
      ExtArgs["result"]["sharedProject"]
    >;
    composites: {};
  };

  type SharedProjectGetPayload<
    S extends boolean | null | undefined | SharedProjectDefaultArgs,
  > = $Result.GetResult<Prisma.$SharedProjectPayload, S>;

  type SharedProjectCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    SharedProjectFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: SharedProjectCountAggregateInputType | true;
  };

  export interface SharedProjectDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["SharedProject"];
      meta: { name: "SharedProject" };
    };
    /**
     * Find zero or one SharedProject that matches the filter.
     * @param {SharedProjectFindUniqueArgs} args - Arguments to find a SharedProject
     * @example
     * // Get one SharedProject
     * const sharedProject = await prisma.sharedProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SharedProjectFindUniqueArgs>(
      args: SelectSubset<T, SharedProjectFindUniqueArgs<ExtArgs>>,
    ): Prisma__SharedProjectClient<
      $Result.GetResult<
        Prisma.$SharedProjectPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one SharedProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SharedProjectFindUniqueOrThrowArgs} args - Arguments to find a SharedProject
     * @example
     * // Get one SharedProject
     * const sharedProject = await prisma.sharedProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SharedProjectFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SharedProjectFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SharedProjectClient<
      $Result.GetResult<
        Prisma.$SharedProjectPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SharedProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedProjectFindFirstArgs} args - Arguments to find a SharedProject
     * @example
     * // Get one SharedProject
     * const sharedProject = await prisma.sharedProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SharedProjectFindFirstArgs>(
      args?: SelectSubset<T, SharedProjectFindFirstArgs<ExtArgs>>,
    ): Prisma__SharedProjectClient<
      $Result.GetResult<
        Prisma.$SharedProjectPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SharedProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedProjectFindFirstOrThrowArgs} args - Arguments to find a SharedProject
     * @example
     * // Get one SharedProject
     * const sharedProject = await prisma.sharedProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SharedProjectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SharedProjectFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SharedProjectClient<
      $Result.GetResult<
        Prisma.$SharedProjectPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more SharedProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedProjects
     * const sharedProjects = await prisma.sharedProject.findMany()
     *
     * // Get first 10 SharedProjects
     * const sharedProjects = await prisma.sharedProject.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sharedProjectWithIdOnly = await prisma.sharedProject.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SharedProjectFindManyArgs>(
      args?: SelectSubset<T, SharedProjectFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SharedProjectPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a SharedProject.
     * @param {SharedProjectCreateArgs} args - Arguments to create a SharedProject.
     * @example
     * // Create one SharedProject
     * const SharedProject = await prisma.sharedProject.create({
     *   data: {
     *     // ... data to create a SharedProject
     *   }
     * })
     *
     */
    create<T extends SharedProjectCreateArgs>(
      args: SelectSubset<T, SharedProjectCreateArgs<ExtArgs>>,
    ): Prisma__SharedProjectClient<
      $Result.GetResult<
        Prisma.$SharedProjectPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many SharedProjects.
     * @param {SharedProjectCreateManyArgs} args - Arguments to create many SharedProjects.
     * @example
     * // Create many SharedProjects
     * const sharedProject = await prisma.sharedProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SharedProjectCreateManyArgs>(
      args?: SelectSubset<T, SharedProjectCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many SharedProjects and returns the data saved in the database.
     * @param {SharedProjectCreateManyAndReturnArgs} args - Arguments to create many SharedProjects.
     * @example
     * // Create many SharedProjects
     * const sharedProject = await prisma.sharedProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SharedProjects and only return the `id`
     * const sharedProjectWithIdOnly = await prisma.sharedProject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SharedProjectCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SharedProjectCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SharedProjectPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a SharedProject.
     * @param {SharedProjectDeleteArgs} args - Arguments to delete one SharedProject.
     * @example
     * // Delete one SharedProject
     * const SharedProject = await prisma.sharedProject.delete({
     *   where: {
     *     // ... filter to delete one SharedProject
     *   }
     * })
     *
     */
    delete<T extends SharedProjectDeleteArgs>(
      args: SelectSubset<T, SharedProjectDeleteArgs<ExtArgs>>,
    ): Prisma__SharedProjectClient<
      $Result.GetResult<
        Prisma.$SharedProjectPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one SharedProject.
     * @param {SharedProjectUpdateArgs} args - Arguments to update one SharedProject.
     * @example
     * // Update one SharedProject
     * const sharedProject = await prisma.sharedProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SharedProjectUpdateArgs>(
      args: SelectSubset<T, SharedProjectUpdateArgs<ExtArgs>>,
    ): Prisma__SharedProjectClient<
      $Result.GetResult<
        Prisma.$SharedProjectPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more SharedProjects.
     * @param {SharedProjectDeleteManyArgs} args - Arguments to filter SharedProjects to delete.
     * @example
     * // Delete a few SharedProjects
     * const { count } = await prisma.sharedProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SharedProjectDeleteManyArgs>(
      args?: SelectSubset<T, SharedProjectDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SharedProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedProjects
     * const sharedProject = await prisma.sharedProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SharedProjectUpdateManyArgs>(
      args: SelectSubset<T, SharedProjectUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SharedProjects and returns the data updated in the database.
     * @param {SharedProjectUpdateManyAndReturnArgs} args - Arguments to update many SharedProjects.
     * @example
     * // Update many SharedProjects
     * const sharedProject = await prisma.sharedProject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SharedProjects and only return the `id`
     * const sharedProjectWithIdOnly = await prisma.sharedProject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SharedProjectUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SharedProjectUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SharedProjectPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one SharedProject.
     * @param {SharedProjectUpsertArgs} args - Arguments to update or create a SharedProject.
     * @example
     * // Update or create a SharedProject
     * const sharedProject = await prisma.sharedProject.upsert({
     *   create: {
     *     // ... data to create a SharedProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedProject we want to update
     *   }
     * })
     */
    upsert<T extends SharedProjectUpsertArgs>(
      args: SelectSubset<T, SharedProjectUpsertArgs<ExtArgs>>,
    ): Prisma__SharedProjectClient<
      $Result.GetResult<
        Prisma.$SharedProjectPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of SharedProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedProjectCountArgs} args - Arguments to filter SharedProjects to count.
     * @example
     * // Count the number of SharedProjects
     * const count = await prisma.sharedProject.count({
     *   where: {
     *     // ... the filter for the SharedProjects we want to count
     *   }
     * })
     **/
    count<T extends SharedProjectCountArgs>(
      args?: Subset<T, SharedProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], SharedProjectCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a SharedProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SharedProjectAggregateArgs>(
      args: Subset<T, SharedProjectAggregateArgs>,
    ): Prisma.PrismaPromise<GetSharedProjectAggregateType<T>>;

    /**
     * Group by SharedProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SharedProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharedProjectGroupByArgs["orderBy"] }
        : { orderBy?: SharedProjectGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SharedProjectGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetSharedProjectGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SharedProject model
     */
    readonly fields: SharedProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SharedProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharedProjectClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProjectDefaultArgs<ExtArgs>>,
    ): Prisma__ProjectClient<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the SharedProject model
   */
  interface SharedProjectFieldRefs {
    readonly id: FieldRef<"SharedProject", "String">;
    readonly projectId: FieldRef<"SharedProject", "String">;
    readonly userId: FieldRef<"SharedProject", "String">;
    readonly permissions: FieldRef<"SharedProject", "String">;
    readonly createdAt: FieldRef<"SharedProject", "DateTime">;
  }

  // Custom InputTypes
  /**
   * SharedProject findUnique
   */
  export type SharedProjectFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedProject
     */
    select?: SharedProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedProject
     */
    omit?: SharedProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedProjectInclude<ExtArgs> | null;
    /**
     * Filter, which SharedProject to fetch.
     */
    where: SharedProjectWhereUniqueInput;
  };

  /**
   * SharedProject findUniqueOrThrow
   */
  export type SharedProjectFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedProject
     */
    select?: SharedProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedProject
     */
    omit?: SharedProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedProjectInclude<ExtArgs> | null;
    /**
     * Filter, which SharedProject to fetch.
     */
    where: SharedProjectWhereUniqueInput;
  };

  /**
   * SharedProject findFirst
   */
  export type SharedProjectFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedProject
     */
    select?: SharedProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedProject
     */
    omit?: SharedProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedProjectInclude<ExtArgs> | null;
    /**
     * Filter, which SharedProject to fetch.
     */
    where?: SharedProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SharedProjects to fetch.
     */
    orderBy?:
      | SharedProjectOrderByWithRelationInput
      | SharedProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SharedProjects.
     */
    cursor?: SharedProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SharedProjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SharedProjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SharedProjects.
     */
    distinct?: SharedProjectScalarFieldEnum | SharedProjectScalarFieldEnum[];
  };

  /**
   * SharedProject findFirstOrThrow
   */
  export type SharedProjectFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedProject
     */
    select?: SharedProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedProject
     */
    omit?: SharedProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedProjectInclude<ExtArgs> | null;
    /**
     * Filter, which SharedProject to fetch.
     */
    where?: SharedProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SharedProjects to fetch.
     */
    orderBy?:
      | SharedProjectOrderByWithRelationInput
      | SharedProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SharedProjects.
     */
    cursor?: SharedProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SharedProjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SharedProjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SharedProjects.
     */
    distinct?: SharedProjectScalarFieldEnum | SharedProjectScalarFieldEnum[];
  };

  /**
   * SharedProject findMany
   */
  export type SharedProjectFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedProject
     */
    select?: SharedProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedProject
     */
    omit?: SharedProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedProjectInclude<ExtArgs> | null;
    /**
     * Filter, which SharedProjects to fetch.
     */
    where?: SharedProjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SharedProjects to fetch.
     */
    orderBy?:
      | SharedProjectOrderByWithRelationInput
      | SharedProjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SharedProjects.
     */
    cursor?: SharedProjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SharedProjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SharedProjects.
     */
    skip?: number;
    distinct?: SharedProjectScalarFieldEnum | SharedProjectScalarFieldEnum[];
  };

  /**
   * SharedProject create
   */
  export type SharedProjectCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedProject
     */
    select?: SharedProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedProject
     */
    omit?: SharedProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedProjectInclude<ExtArgs> | null;
    /**
     * The data needed to create a SharedProject.
     */
    data: XOR<SharedProjectCreateInput, SharedProjectUncheckedCreateInput>;
  };

  /**
   * SharedProject createMany
   */
  export type SharedProjectCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many SharedProjects.
     */
    data: SharedProjectCreateManyInput | SharedProjectCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * SharedProject createManyAndReturn
   */
  export type SharedProjectCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedProject
     */
    select?: SharedProjectSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedProject
     */
    omit?: SharedProjectOmit<ExtArgs> | null;
    /**
     * The data used to create many SharedProjects.
     */
    data: SharedProjectCreateManyInput | SharedProjectCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedProjectIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * SharedProject update
   */
  export type SharedProjectUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedProject
     */
    select?: SharedProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedProject
     */
    omit?: SharedProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedProjectInclude<ExtArgs> | null;
    /**
     * The data needed to update a SharedProject.
     */
    data: XOR<SharedProjectUpdateInput, SharedProjectUncheckedUpdateInput>;
    /**
     * Choose, which SharedProject to update.
     */
    where: SharedProjectWhereUniqueInput;
  };

  /**
   * SharedProject updateMany
   */
  export type SharedProjectUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update SharedProjects.
     */
    data: XOR<
      SharedProjectUpdateManyMutationInput,
      SharedProjectUncheckedUpdateManyInput
    >;
    /**
     * Filter which SharedProjects to update
     */
    where?: SharedProjectWhereInput;
    /**
     * Limit how many SharedProjects to update.
     */
    limit?: number;
  };

  /**
   * SharedProject updateManyAndReturn
   */
  export type SharedProjectUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedProject
     */
    select?: SharedProjectSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedProject
     */
    omit?: SharedProjectOmit<ExtArgs> | null;
    /**
     * The data used to update SharedProjects.
     */
    data: XOR<
      SharedProjectUpdateManyMutationInput,
      SharedProjectUncheckedUpdateManyInput
    >;
    /**
     * Filter which SharedProjects to update
     */
    where?: SharedProjectWhereInput;
    /**
     * Limit how many SharedProjects to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedProjectIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * SharedProject upsert
   */
  export type SharedProjectUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedProject
     */
    select?: SharedProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedProject
     */
    omit?: SharedProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedProjectInclude<ExtArgs> | null;
    /**
     * The filter to search for the SharedProject to update in case it exists.
     */
    where: SharedProjectWhereUniqueInput;
    /**
     * In case the SharedProject found by the `where` argument doesn't exist, create a new SharedProject with this data.
     */
    create: XOR<SharedProjectCreateInput, SharedProjectUncheckedCreateInput>;
    /**
     * In case the SharedProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharedProjectUpdateInput, SharedProjectUncheckedUpdateInput>;
  };

  /**
   * SharedProject delete
   */
  export type SharedProjectDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedProject
     */
    select?: SharedProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedProject
     */
    omit?: SharedProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedProjectInclude<ExtArgs> | null;
    /**
     * Filter which SharedProject to delete.
     */
    where: SharedProjectWhereUniqueInput;
  };

  /**
   * SharedProject deleteMany
   */
  export type SharedProjectDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SharedProjects to delete
     */
    where?: SharedProjectWhereInput;
    /**
     * Limit how many SharedProjects to delete.
     */
    limit?: number;
  };

  /**
   * SharedProject without action
   */
  export type SharedProjectDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedProject
     */
    select?: SharedProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedProject
     */
    omit?: SharedProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedProjectInclude<ExtArgs> | null;
  };

  /**
   * Model ProjectInvitation
   */

  export type AggregateProjectInvitation = {
    _count: ProjectInvitationCountAggregateOutputType | null;
    _min: ProjectInvitationMinAggregateOutputType | null;
    _max: ProjectInvitationMaxAggregateOutputType | null;
  };

  export type ProjectInvitationMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    email: string | null;
    userId: string | null;
    token: string | null;
    expires: Date | null;
    createdAt: Date | null;
  };

  export type ProjectInvitationMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    email: string | null;
    userId: string | null;
    token: string | null;
    expires: Date | null;
    createdAt: Date | null;
  };

  export type ProjectInvitationCountAggregateOutputType = {
    id: number;
    projectId: number;
    email: number;
    userId: number;
    token: number;
    expires: number;
    createdAt: number;
    _all: number;
  };

  export type ProjectInvitationMinAggregateInputType = {
    id?: true;
    projectId?: true;
    email?: true;
    userId?: true;
    token?: true;
    expires?: true;
    createdAt?: true;
  };

  export type ProjectInvitationMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    email?: true;
    userId?: true;
    token?: true;
    expires?: true;
    createdAt?: true;
  };

  export type ProjectInvitationCountAggregateInputType = {
    id?: true;
    projectId?: true;
    email?: true;
    userId?: true;
    token?: true;
    expires?: true;
    createdAt?: true;
    _all?: true;
  };

  export type ProjectInvitationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProjectInvitation to aggregate.
     */
    where?: ProjectInvitationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectInvitations to fetch.
     */
    orderBy?:
      | ProjectInvitationOrderByWithRelationInput
      | ProjectInvitationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProjectInvitationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectInvitations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectInvitations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProjectInvitations
     **/
    _count?: true | ProjectInvitationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProjectInvitationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProjectInvitationMaxAggregateInputType;
  };

  export type GetProjectInvitationAggregateType<
    T extends ProjectInvitationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateProjectInvitation]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectInvitation[P]>
      : GetScalarType<T[P], AggregateProjectInvitation[P]>;
  };

  export type ProjectInvitationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectInvitationWhereInput;
    orderBy?:
      | ProjectInvitationOrderByWithAggregationInput
      | ProjectInvitationOrderByWithAggregationInput[];
    by: ProjectInvitationScalarFieldEnum[] | ProjectInvitationScalarFieldEnum;
    having?: ProjectInvitationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectInvitationCountAggregateInputType | true;
    _min?: ProjectInvitationMinAggregateInputType;
    _max?: ProjectInvitationMaxAggregateInputType;
  };

  export type ProjectInvitationGroupByOutputType = {
    id: string;
    projectId: string;
    email: string;
    userId: string | null;
    token: string;
    expires: Date;
    createdAt: Date;
    _count: ProjectInvitationCountAggregateOutputType | null;
    _min: ProjectInvitationMinAggregateOutputType | null;
    _max: ProjectInvitationMaxAggregateOutputType | null;
  };

  type GetProjectInvitationGroupByPayload<
    T extends ProjectInvitationGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectInvitationGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof ProjectInvitationGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProjectInvitationGroupByOutputType[P]>
          : GetScalarType<T[P], ProjectInvitationGroupByOutputType[P]>;
      }
    >
  >;

  export type ProjectInvitationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      email?: boolean;
      userId?: boolean;
      token?: boolean;
      expires?: boolean;
      createdAt?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      user?: boolean | ProjectInvitation$userArgs<ExtArgs>;
    },
    ExtArgs["result"]["projectInvitation"]
  >;

  export type ProjectInvitationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      email?: boolean;
      userId?: boolean;
      token?: boolean;
      expires?: boolean;
      createdAt?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      user?: boolean | ProjectInvitation$userArgs<ExtArgs>;
    },
    ExtArgs["result"]["projectInvitation"]
  >;

  export type ProjectInvitationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      email?: boolean;
      userId?: boolean;
      token?: boolean;
      expires?: boolean;
      createdAt?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
      user?: boolean | ProjectInvitation$userArgs<ExtArgs>;
    },
    ExtArgs["result"]["projectInvitation"]
  >;

  export type ProjectInvitationSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    email?: boolean;
    userId?: boolean;
    token?: boolean;
    expires?: boolean;
    createdAt?: boolean;
  };

  export type ProjectInvitationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "projectId" | "email" | "userId" | "token" | "expires" | "createdAt",
    ExtArgs["result"]["projectInvitation"]
  >;
  export type ProjectInvitationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    user?: boolean | ProjectInvitation$userArgs<ExtArgs>;
  };
  export type ProjectInvitationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    user?: boolean | ProjectInvitation$userArgs<ExtArgs>;
  };
  export type ProjectInvitationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
    user?: boolean | ProjectInvitation$userArgs<ExtArgs>;
  };

  export type $ProjectInvitationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "ProjectInvitation";
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        projectId: string;
        email: string;
        userId: string | null;
        token: string;
        expires: Date;
        createdAt: Date;
      },
      ExtArgs["result"]["projectInvitation"]
    >;
    composites: {};
  };

  type ProjectInvitationGetPayload<
    S extends boolean | null | undefined | ProjectInvitationDefaultArgs,
  > = $Result.GetResult<Prisma.$ProjectInvitationPayload, S>;

  type ProjectInvitationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ProjectInvitationFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ProjectInvitationCountAggregateInputType | true;
  };

  export interface ProjectInvitationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ProjectInvitation"];
      meta: { name: "ProjectInvitation" };
    };
    /**
     * Find zero or one ProjectInvitation that matches the filter.
     * @param {ProjectInvitationFindUniqueArgs} args - Arguments to find a ProjectInvitation
     * @example
     * // Get one ProjectInvitation
     * const projectInvitation = await prisma.projectInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectInvitationFindUniqueArgs>(
      args: SelectSubset<T, ProjectInvitationFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProjectInvitationClient<
      $Result.GetResult<
        Prisma.$ProjectInvitationPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ProjectInvitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectInvitationFindUniqueOrThrowArgs} args - Arguments to find a ProjectInvitation
     * @example
     * // Get one ProjectInvitation
     * const projectInvitation = await prisma.projectInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectInvitationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProjectInvitationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProjectInvitationClient<
      $Result.GetResult<
        Prisma.$ProjectInvitationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProjectInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInvitationFindFirstArgs} args - Arguments to find a ProjectInvitation
     * @example
     * // Get one ProjectInvitation
     * const projectInvitation = await prisma.projectInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectInvitationFindFirstArgs>(
      args?: SelectSubset<T, ProjectInvitationFindFirstArgs<ExtArgs>>,
    ): Prisma__ProjectInvitationClient<
      $Result.GetResult<
        Prisma.$ProjectInvitationPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProjectInvitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInvitationFindFirstOrThrowArgs} args - Arguments to find a ProjectInvitation
     * @example
     * // Get one ProjectInvitation
     * const projectInvitation = await prisma.projectInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectInvitationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectInvitationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProjectInvitationClient<
      $Result.GetResult<
        Prisma.$ProjectInvitationPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ProjectInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectInvitations
     * const projectInvitations = await prisma.projectInvitation.findMany()
     *
     * // Get first 10 ProjectInvitations
     * const projectInvitations = await prisma.projectInvitation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const projectInvitationWithIdOnly = await prisma.projectInvitation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProjectInvitationFindManyArgs>(
      args?: SelectSubset<T, ProjectInvitationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProjectInvitationPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ProjectInvitation.
     * @param {ProjectInvitationCreateArgs} args - Arguments to create a ProjectInvitation.
     * @example
     * // Create one ProjectInvitation
     * const ProjectInvitation = await prisma.projectInvitation.create({
     *   data: {
     *     // ... data to create a ProjectInvitation
     *   }
     * })
     *
     */
    create<T extends ProjectInvitationCreateArgs>(
      args: SelectSubset<T, ProjectInvitationCreateArgs<ExtArgs>>,
    ): Prisma__ProjectInvitationClient<
      $Result.GetResult<
        Prisma.$ProjectInvitationPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ProjectInvitations.
     * @param {ProjectInvitationCreateManyArgs} args - Arguments to create many ProjectInvitations.
     * @example
     * // Create many ProjectInvitations
     * const projectInvitation = await prisma.projectInvitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProjectInvitationCreateManyArgs>(
      args?: SelectSubset<T, ProjectInvitationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ProjectInvitations and returns the data saved in the database.
     * @param {ProjectInvitationCreateManyAndReturnArgs} args - Arguments to create many ProjectInvitations.
     * @example
     * // Create many ProjectInvitations
     * const projectInvitation = await prisma.projectInvitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProjectInvitations and only return the `id`
     * const projectInvitationWithIdOnly = await prisma.projectInvitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProjectInvitationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProjectInvitationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProjectInvitationPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ProjectInvitation.
     * @param {ProjectInvitationDeleteArgs} args - Arguments to delete one ProjectInvitation.
     * @example
     * // Delete one ProjectInvitation
     * const ProjectInvitation = await prisma.projectInvitation.delete({
     *   where: {
     *     // ... filter to delete one ProjectInvitation
     *   }
     * })
     *
     */
    delete<T extends ProjectInvitationDeleteArgs>(
      args: SelectSubset<T, ProjectInvitationDeleteArgs<ExtArgs>>,
    ): Prisma__ProjectInvitationClient<
      $Result.GetResult<
        Prisma.$ProjectInvitationPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ProjectInvitation.
     * @param {ProjectInvitationUpdateArgs} args - Arguments to update one ProjectInvitation.
     * @example
     * // Update one ProjectInvitation
     * const projectInvitation = await prisma.projectInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProjectInvitationUpdateArgs>(
      args: SelectSubset<T, ProjectInvitationUpdateArgs<ExtArgs>>,
    ): Prisma__ProjectInvitationClient<
      $Result.GetResult<
        Prisma.$ProjectInvitationPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ProjectInvitations.
     * @param {ProjectInvitationDeleteManyArgs} args - Arguments to filter ProjectInvitations to delete.
     * @example
     * // Delete a few ProjectInvitations
     * const { count } = await prisma.projectInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProjectInvitationDeleteManyArgs>(
      args?: SelectSubset<T, ProjectInvitationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProjectInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectInvitations
     * const projectInvitation = await prisma.projectInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProjectInvitationUpdateManyArgs>(
      args: SelectSubset<T, ProjectInvitationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProjectInvitations and returns the data updated in the database.
     * @param {ProjectInvitationUpdateManyAndReturnArgs} args - Arguments to update many ProjectInvitations.
     * @example
     * // Update many ProjectInvitations
     * const projectInvitation = await prisma.projectInvitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProjectInvitations and only return the `id`
     * const projectInvitationWithIdOnly = await prisma.projectInvitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProjectInvitationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProjectInvitationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProjectInvitationPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ProjectInvitation.
     * @param {ProjectInvitationUpsertArgs} args - Arguments to update or create a ProjectInvitation.
     * @example
     * // Update or create a ProjectInvitation
     * const projectInvitation = await prisma.projectInvitation.upsert({
     *   create: {
     *     // ... data to create a ProjectInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectInvitation we want to update
     *   }
     * })
     */
    upsert<T extends ProjectInvitationUpsertArgs>(
      args: SelectSubset<T, ProjectInvitationUpsertArgs<ExtArgs>>,
    ): Prisma__ProjectInvitationClient<
      $Result.GetResult<
        Prisma.$ProjectInvitationPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ProjectInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInvitationCountArgs} args - Arguments to filter ProjectInvitations to count.
     * @example
     * // Count the number of ProjectInvitations
     * const count = await prisma.projectInvitation.count({
     *   where: {
     *     // ... the filter for the ProjectInvitations we want to count
     *   }
     * })
     **/
    count<T extends ProjectInvitationCountArgs>(
      args?: Subset<T, ProjectInvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<
              T["select"],
              ProjectInvitationCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ProjectInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProjectInvitationAggregateArgs>(
      args: Subset<T, ProjectInvitationAggregateArgs>,
    ): Prisma.PrismaPromise<GetProjectInvitationAggregateType<T>>;

    /**
     * Group by ProjectInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectInvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProjectInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectInvitationGroupByArgs["orderBy"] }
        : { orderBy?: ProjectInvitationGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProjectInvitationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetProjectInvitationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProjectInvitation model
     */
    readonly fields: ProjectInvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectInvitationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProjectDefaultArgs<ExtArgs>>,
    ): Prisma__ProjectClient<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends ProjectInvitation$userArgs<ExtArgs> = {}>(
      args?: Subset<T, ProjectInvitation$userArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ProjectInvitation model
   */
  interface ProjectInvitationFieldRefs {
    readonly id: FieldRef<"ProjectInvitation", "String">;
    readonly projectId: FieldRef<"ProjectInvitation", "String">;
    readonly email: FieldRef<"ProjectInvitation", "String">;
    readonly userId: FieldRef<"ProjectInvitation", "String">;
    readonly token: FieldRef<"ProjectInvitation", "String">;
    readonly expires: FieldRef<"ProjectInvitation", "DateTime">;
    readonly createdAt: FieldRef<"ProjectInvitation", "DateTime">;
  }

  // Custom InputTypes
  /**
   * ProjectInvitation findUnique
   */
  export type ProjectInvitationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null;
    /**
     * Filter, which ProjectInvitation to fetch.
     */
    where: ProjectInvitationWhereUniqueInput;
  };

  /**
   * ProjectInvitation findUniqueOrThrow
   */
  export type ProjectInvitationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null;
    /**
     * Filter, which ProjectInvitation to fetch.
     */
    where: ProjectInvitationWhereUniqueInput;
  };

  /**
   * ProjectInvitation findFirst
   */
  export type ProjectInvitationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null;
    /**
     * Filter, which ProjectInvitation to fetch.
     */
    where?: ProjectInvitationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectInvitations to fetch.
     */
    orderBy?:
      | ProjectInvitationOrderByWithRelationInput
      | ProjectInvitationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProjectInvitations.
     */
    cursor?: ProjectInvitationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectInvitations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectInvitations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProjectInvitations.
     */
    distinct?:
      | ProjectInvitationScalarFieldEnum
      | ProjectInvitationScalarFieldEnum[];
  };

  /**
   * ProjectInvitation findFirstOrThrow
   */
  export type ProjectInvitationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null;
    /**
     * Filter, which ProjectInvitation to fetch.
     */
    where?: ProjectInvitationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectInvitations to fetch.
     */
    orderBy?:
      | ProjectInvitationOrderByWithRelationInput
      | ProjectInvitationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProjectInvitations.
     */
    cursor?: ProjectInvitationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectInvitations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectInvitations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProjectInvitations.
     */
    distinct?:
      | ProjectInvitationScalarFieldEnum
      | ProjectInvitationScalarFieldEnum[];
  };

  /**
   * ProjectInvitation findMany
   */
  export type ProjectInvitationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null;
    /**
     * Filter, which ProjectInvitations to fetch.
     */
    where?: ProjectInvitationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectInvitations to fetch.
     */
    orderBy?:
      | ProjectInvitationOrderByWithRelationInput
      | ProjectInvitationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProjectInvitations.
     */
    cursor?: ProjectInvitationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectInvitations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectInvitations.
     */
    skip?: number;
    distinct?:
      | ProjectInvitationScalarFieldEnum
      | ProjectInvitationScalarFieldEnum[];
  };

  /**
   * ProjectInvitation create
   */
  export type ProjectInvitationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProjectInvitation.
     */
    data: XOR<
      ProjectInvitationCreateInput,
      ProjectInvitationUncheckedCreateInput
    >;
  };

  /**
   * ProjectInvitation createMany
   */
  export type ProjectInvitationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ProjectInvitations.
     */
    data: ProjectInvitationCreateManyInput | ProjectInvitationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ProjectInvitation createManyAndReturn
   */
  export type ProjectInvitationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null;
    /**
     * The data used to create many ProjectInvitations.
     */
    data: ProjectInvitationCreateManyInput | ProjectInvitationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProjectInvitation update
   */
  export type ProjectInvitationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProjectInvitation.
     */
    data: XOR<
      ProjectInvitationUpdateInput,
      ProjectInvitationUncheckedUpdateInput
    >;
    /**
     * Choose, which ProjectInvitation to update.
     */
    where: ProjectInvitationWhereUniqueInput;
  };

  /**
   * ProjectInvitation updateMany
   */
  export type ProjectInvitationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ProjectInvitations.
     */
    data: XOR<
      ProjectInvitationUpdateManyMutationInput,
      ProjectInvitationUncheckedUpdateManyInput
    >;
    /**
     * Filter which ProjectInvitations to update
     */
    where?: ProjectInvitationWhereInput;
    /**
     * Limit how many ProjectInvitations to update.
     */
    limit?: number;
  };

  /**
   * ProjectInvitation updateManyAndReturn
   */
  export type ProjectInvitationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null;
    /**
     * The data used to update ProjectInvitations.
     */
    data: XOR<
      ProjectInvitationUpdateManyMutationInput,
      ProjectInvitationUncheckedUpdateManyInput
    >;
    /**
     * Filter which ProjectInvitations to update
     */
    where?: ProjectInvitationWhereInput;
    /**
     * Limit how many ProjectInvitations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProjectInvitation upsert
   */
  export type ProjectInvitationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProjectInvitation to update in case it exists.
     */
    where: ProjectInvitationWhereUniqueInput;
    /**
     * In case the ProjectInvitation found by the `where` argument doesn't exist, create a new ProjectInvitation with this data.
     */
    create: XOR<
      ProjectInvitationCreateInput,
      ProjectInvitationUncheckedCreateInput
    >;
    /**
     * In case the ProjectInvitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      ProjectInvitationUpdateInput,
      ProjectInvitationUncheckedUpdateInput
    >;
  };

  /**
   * ProjectInvitation delete
   */
  export type ProjectInvitationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null;
    /**
     * Filter which ProjectInvitation to delete.
     */
    where: ProjectInvitationWhereUniqueInput;
  };

  /**
   * ProjectInvitation deleteMany
   */
  export type ProjectInvitationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProjectInvitations to delete
     */
    where?: ProjectInvitationWhereInput;
    /**
     * Limit how many ProjectInvitations to delete.
     */
    limit?: number;
  };

  /**
   * ProjectInvitation.user
   */
  export type ProjectInvitation$userArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * ProjectInvitation without action
   */
  export type ProjectInvitationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectInvitation
     */
    select?: ProjectInvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProjectInvitation
     */
    omit?: ProjectInvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInvitationInclude<ExtArgs> | null;
  };

  /**
   * Model ExportHistory
   */

  export type AggregateExportHistory = {
    _count: ExportHistoryCountAggregateOutputType | null;
    _min: ExportHistoryMinAggregateOutputType | null;
    _max: ExportHistoryMaxAggregateOutputType | null;
  };

  export type ExportHistoryMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    format: string | null;
    createdAt: Date | null;
    fileUrl: string | null;
  };

  export type ExportHistoryMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    format: string | null;
    createdAt: Date | null;
    fileUrl: string | null;
  };

  export type ExportHistoryCountAggregateOutputType = {
    id: number;
    projectId: number;
    format: number;
    createdAt: number;
    fileUrl: number;
    _all: number;
  };

  export type ExportHistoryMinAggregateInputType = {
    id?: true;
    projectId?: true;
    format?: true;
    createdAt?: true;
    fileUrl?: true;
  };

  export type ExportHistoryMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    format?: true;
    createdAt?: true;
    fileUrl?: true;
  };

  export type ExportHistoryCountAggregateInputType = {
    id?: true;
    projectId?: true;
    format?: true;
    createdAt?: true;
    fileUrl?: true;
    _all?: true;
  };

  export type ExportHistoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ExportHistory to aggregate.
     */
    where?: ExportHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ExportHistories to fetch.
     */
    orderBy?:
      | ExportHistoryOrderByWithRelationInput
      | ExportHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ExportHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ExportHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ExportHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ExportHistories
     **/
    _count?: true | ExportHistoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ExportHistoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ExportHistoryMaxAggregateInputType;
  };

  export type GetExportHistoryAggregateType<
    T extends ExportHistoryAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateExportHistory]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExportHistory[P]>
      : GetScalarType<T[P], AggregateExportHistory[P]>;
  };

  export type ExportHistoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ExportHistoryWhereInput;
    orderBy?:
      | ExportHistoryOrderByWithAggregationInput
      | ExportHistoryOrderByWithAggregationInput[];
    by: ExportHistoryScalarFieldEnum[] | ExportHistoryScalarFieldEnum;
    having?: ExportHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExportHistoryCountAggregateInputType | true;
    _min?: ExportHistoryMinAggregateInputType;
    _max?: ExportHistoryMaxAggregateInputType;
  };

  export type ExportHistoryGroupByOutputType = {
    id: string;
    projectId: string;
    format: string;
    createdAt: Date;
    fileUrl: string | null;
    _count: ExportHistoryCountAggregateOutputType | null;
    _min: ExportHistoryMinAggregateOutputType | null;
    _max: ExportHistoryMaxAggregateOutputType | null;
  };

  type GetExportHistoryGroupByPayload<T extends ExportHistoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ExportHistoryGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof ExportHistoryGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExportHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ExportHistoryGroupByOutputType[P]>;
        }
      >
    >;

  export type ExportHistorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      format?: boolean;
      createdAt?: boolean;
      fileUrl?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["exportHistory"]
  >;

  export type ExportHistorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      format?: boolean;
      createdAt?: boolean;
      fileUrl?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["exportHistory"]
  >;

  export type ExportHistorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      format?: boolean;
      createdAt?: boolean;
      fileUrl?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["exportHistory"]
  >;

  export type ExportHistorySelectScalar = {
    id?: boolean;
    projectId?: boolean;
    format?: boolean;
    createdAt?: boolean;
    fileUrl?: boolean;
  };

  export type ExportHistoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "projectId" | "format" | "createdAt" | "fileUrl",
    ExtArgs["result"]["exportHistory"]
  >;
  export type ExportHistoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
  };
  export type ExportHistoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
  };
  export type ExportHistoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
  };

  export type $ExportHistoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "ExportHistory";
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        projectId: string;
        format: string;
        createdAt: Date;
        fileUrl: string | null;
      },
      ExtArgs["result"]["exportHistory"]
    >;
    composites: {};
  };

  type ExportHistoryGetPayload<
    S extends boolean | null | undefined | ExportHistoryDefaultArgs,
  > = $Result.GetResult<Prisma.$ExportHistoryPayload, S>;

  type ExportHistoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ExportHistoryFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ExportHistoryCountAggregateInputType | true;
  };

  export interface ExportHistoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ExportHistory"];
      meta: { name: "ExportHistory" };
    };
    /**
     * Find zero or one ExportHistory that matches the filter.
     * @param {ExportHistoryFindUniqueArgs} args - Arguments to find a ExportHistory
     * @example
     * // Get one ExportHistory
     * const exportHistory = await prisma.exportHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExportHistoryFindUniqueArgs>(
      args: SelectSubset<T, ExportHistoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__ExportHistoryClient<
      $Result.GetResult<
        Prisma.$ExportHistoryPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ExportHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExportHistoryFindUniqueOrThrowArgs} args - Arguments to find a ExportHistory
     * @example
     * // Get one ExportHistory
     * const exportHistory = await prisma.exportHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExportHistoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ExportHistoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ExportHistoryClient<
      $Result.GetResult<
        Prisma.$ExportHistoryPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ExportHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportHistoryFindFirstArgs} args - Arguments to find a ExportHistory
     * @example
     * // Get one ExportHistory
     * const exportHistory = await prisma.exportHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExportHistoryFindFirstArgs>(
      args?: SelectSubset<T, ExportHistoryFindFirstArgs<ExtArgs>>,
    ): Prisma__ExportHistoryClient<
      $Result.GetResult<
        Prisma.$ExportHistoryPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ExportHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportHistoryFindFirstOrThrowArgs} args - Arguments to find a ExportHistory
     * @example
     * // Get one ExportHistory
     * const exportHistory = await prisma.exportHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExportHistoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExportHistoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ExportHistoryClient<
      $Result.GetResult<
        Prisma.$ExportHistoryPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ExportHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExportHistories
     * const exportHistories = await prisma.exportHistory.findMany()
     *
     * // Get first 10 ExportHistories
     * const exportHistories = await prisma.exportHistory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const exportHistoryWithIdOnly = await prisma.exportHistory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ExportHistoryFindManyArgs>(
      args?: SelectSubset<T, ExportHistoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ExportHistoryPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ExportHistory.
     * @param {ExportHistoryCreateArgs} args - Arguments to create a ExportHistory.
     * @example
     * // Create one ExportHistory
     * const ExportHistory = await prisma.exportHistory.create({
     *   data: {
     *     // ... data to create a ExportHistory
     *   }
     * })
     *
     */
    create<T extends ExportHistoryCreateArgs>(
      args: SelectSubset<T, ExportHistoryCreateArgs<ExtArgs>>,
    ): Prisma__ExportHistoryClient<
      $Result.GetResult<
        Prisma.$ExportHistoryPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ExportHistories.
     * @param {ExportHistoryCreateManyArgs} args - Arguments to create many ExportHistories.
     * @example
     * // Create many ExportHistories
     * const exportHistory = await prisma.exportHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ExportHistoryCreateManyArgs>(
      args?: SelectSubset<T, ExportHistoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ExportHistories and returns the data saved in the database.
     * @param {ExportHistoryCreateManyAndReturnArgs} args - Arguments to create many ExportHistories.
     * @example
     * // Create many ExportHistories
     * const exportHistory = await prisma.exportHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ExportHistories and only return the `id`
     * const exportHistoryWithIdOnly = await prisma.exportHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ExportHistoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ExportHistoryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ExportHistoryPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ExportHistory.
     * @param {ExportHistoryDeleteArgs} args - Arguments to delete one ExportHistory.
     * @example
     * // Delete one ExportHistory
     * const ExportHistory = await prisma.exportHistory.delete({
     *   where: {
     *     // ... filter to delete one ExportHistory
     *   }
     * })
     *
     */
    delete<T extends ExportHistoryDeleteArgs>(
      args: SelectSubset<T, ExportHistoryDeleteArgs<ExtArgs>>,
    ): Prisma__ExportHistoryClient<
      $Result.GetResult<
        Prisma.$ExportHistoryPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ExportHistory.
     * @param {ExportHistoryUpdateArgs} args - Arguments to update one ExportHistory.
     * @example
     * // Update one ExportHistory
     * const exportHistory = await prisma.exportHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ExportHistoryUpdateArgs>(
      args: SelectSubset<T, ExportHistoryUpdateArgs<ExtArgs>>,
    ): Prisma__ExportHistoryClient<
      $Result.GetResult<
        Prisma.$ExportHistoryPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ExportHistories.
     * @param {ExportHistoryDeleteManyArgs} args - Arguments to filter ExportHistories to delete.
     * @example
     * // Delete a few ExportHistories
     * const { count } = await prisma.exportHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ExportHistoryDeleteManyArgs>(
      args?: SelectSubset<T, ExportHistoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ExportHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExportHistories
     * const exportHistory = await prisma.exportHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ExportHistoryUpdateManyArgs>(
      args: SelectSubset<T, ExportHistoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ExportHistories and returns the data updated in the database.
     * @param {ExportHistoryUpdateManyAndReturnArgs} args - Arguments to update many ExportHistories.
     * @example
     * // Update many ExportHistories
     * const exportHistory = await prisma.exportHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ExportHistories and only return the `id`
     * const exportHistoryWithIdOnly = await prisma.exportHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ExportHistoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ExportHistoryUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ExportHistoryPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ExportHistory.
     * @param {ExportHistoryUpsertArgs} args - Arguments to update or create a ExportHistory.
     * @example
     * // Update or create a ExportHistory
     * const exportHistory = await prisma.exportHistory.upsert({
     *   create: {
     *     // ... data to create a ExportHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExportHistory we want to update
     *   }
     * })
     */
    upsert<T extends ExportHistoryUpsertArgs>(
      args: SelectSubset<T, ExportHistoryUpsertArgs<ExtArgs>>,
    ): Prisma__ExportHistoryClient<
      $Result.GetResult<
        Prisma.$ExportHistoryPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ExportHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportHistoryCountArgs} args - Arguments to filter ExportHistories to count.
     * @example
     * // Count the number of ExportHistories
     * const count = await prisma.exportHistory.count({
     *   where: {
     *     // ... the filter for the ExportHistories we want to count
     *   }
     * })
     **/
    count<T extends ExportHistoryCountArgs>(
      args?: Subset<T, ExportHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ExportHistoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ExportHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ExportHistoryAggregateArgs>(
      args: Subset<T, ExportHistoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetExportHistoryAggregateType<T>>;

    /**
     * Group by ExportHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ExportHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExportHistoryGroupByArgs["orderBy"] }
        : { orderBy?: ExportHistoryGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ExportHistoryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetExportHistoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ExportHistory model
     */
    readonly fields: ExportHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExportHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExportHistoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProjectDefaultArgs<ExtArgs>>,
    ): Prisma__ProjectClient<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ExportHistory model
   */
  interface ExportHistoryFieldRefs {
    readonly id: FieldRef<"ExportHistory", "String">;
    readonly projectId: FieldRef<"ExportHistory", "String">;
    readonly format: FieldRef<"ExportHistory", "String">;
    readonly createdAt: FieldRef<"ExportHistory", "DateTime">;
    readonly fileUrl: FieldRef<"ExportHistory", "String">;
  }

  // Custom InputTypes
  /**
   * ExportHistory findUnique
   */
  export type ExportHistoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which ExportHistory to fetch.
     */
    where: ExportHistoryWhereUniqueInput;
  };

  /**
   * ExportHistory findUniqueOrThrow
   */
  export type ExportHistoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which ExportHistory to fetch.
     */
    where: ExportHistoryWhereUniqueInput;
  };

  /**
   * ExportHistory findFirst
   */
  export type ExportHistoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which ExportHistory to fetch.
     */
    where?: ExportHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ExportHistories to fetch.
     */
    orderBy?:
      | ExportHistoryOrderByWithRelationInput
      | ExportHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ExportHistories.
     */
    cursor?: ExportHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ExportHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ExportHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ExportHistories.
     */
    distinct?: ExportHistoryScalarFieldEnum | ExportHistoryScalarFieldEnum[];
  };

  /**
   * ExportHistory findFirstOrThrow
   */
  export type ExportHistoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which ExportHistory to fetch.
     */
    where?: ExportHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ExportHistories to fetch.
     */
    orderBy?:
      | ExportHistoryOrderByWithRelationInput
      | ExportHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ExportHistories.
     */
    cursor?: ExportHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ExportHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ExportHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ExportHistories.
     */
    distinct?: ExportHistoryScalarFieldEnum | ExportHistoryScalarFieldEnum[];
  };

  /**
   * ExportHistory findMany
   */
  export type ExportHistoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which ExportHistories to fetch.
     */
    where?: ExportHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ExportHistories to fetch.
     */
    orderBy?:
      | ExportHistoryOrderByWithRelationInput
      | ExportHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ExportHistories.
     */
    cursor?: ExportHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ExportHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ExportHistories.
     */
    skip?: number;
    distinct?: ExportHistoryScalarFieldEnum | ExportHistoryScalarFieldEnum[];
  };

  /**
   * ExportHistory create
   */
  export type ExportHistoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportHistoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a ExportHistory.
     */
    data: XOR<ExportHistoryCreateInput, ExportHistoryUncheckedCreateInput>;
  };

  /**
   * ExportHistory createMany
   */
  export type ExportHistoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ExportHistories.
     */
    data: ExportHistoryCreateManyInput | ExportHistoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ExportHistory createManyAndReturn
   */
  export type ExportHistoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null;
    /**
     * The data used to create many ExportHistories.
     */
    data: ExportHistoryCreateManyInput | ExportHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ExportHistory update
   */
  export type ExportHistoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportHistoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a ExportHistory.
     */
    data: XOR<ExportHistoryUpdateInput, ExportHistoryUncheckedUpdateInput>;
    /**
     * Choose, which ExportHistory to update.
     */
    where: ExportHistoryWhereUniqueInput;
  };

  /**
   * ExportHistory updateMany
   */
  export type ExportHistoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ExportHistories.
     */
    data: XOR<
      ExportHistoryUpdateManyMutationInput,
      ExportHistoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which ExportHistories to update
     */
    where?: ExportHistoryWhereInput;
    /**
     * Limit how many ExportHistories to update.
     */
    limit?: number;
  };

  /**
   * ExportHistory updateManyAndReturn
   */
  export type ExportHistoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null;
    /**
     * The data used to update ExportHistories.
     */
    data: XOR<
      ExportHistoryUpdateManyMutationInput,
      ExportHistoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which ExportHistories to update
     */
    where?: ExportHistoryWhereInput;
    /**
     * Limit how many ExportHistories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ExportHistory upsert
   */
  export type ExportHistoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportHistoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the ExportHistory to update in case it exists.
     */
    where: ExportHistoryWhereUniqueInput;
    /**
     * In case the ExportHistory found by the `where` argument doesn't exist, create a new ExportHistory with this data.
     */
    create: XOR<ExportHistoryCreateInput, ExportHistoryUncheckedCreateInput>;
    /**
     * In case the ExportHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExportHistoryUpdateInput, ExportHistoryUncheckedUpdateInput>;
  };

  /**
   * ExportHistory delete
   */
  export type ExportHistoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportHistoryInclude<ExtArgs> | null;
    /**
     * Filter which ExportHistory to delete.
     */
    where: ExportHistoryWhereUniqueInput;
  };

  /**
   * ExportHistory deleteMany
   */
  export type ExportHistoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ExportHistories to delete
     */
    where?: ExportHistoryWhereInput;
    /**
     * Limit how many ExportHistories to delete.
     */
    limit?: number;
  };

  /**
   * ExportHistory without action
   */
  export type ExportHistoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportHistoryInclude<ExtArgs> | null;
  };

  /**
   * Model WritingAnalytics
   */

  export type AggregateWritingAnalytics = {
    _count: WritingAnalyticsCountAggregateOutputType | null;
    _avg: WritingAnalyticsAvgAggregateOutputType | null;
    _sum: WritingAnalyticsSumAggregateOutputType | null;
    _min: WritingAnalyticsMinAggregateOutputType | null;
    _max: WritingAnalyticsMaxAggregateOutputType | null;
  };

  export type WritingAnalyticsAvgAggregateOutputType = {
    wordCount: number | null;
    characterCount: number | null;
    sentenceCount: number | null;
    paragraphCount: number | null;
    readabilityScore: number | null;
  };

  export type WritingAnalyticsSumAggregateOutputType = {
    wordCount: number | null;
    characterCount: number | null;
    sentenceCount: number | null;
    paragraphCount: number | null;
    readabilityScore: number | null;
  };

  export type WritingAnalyticsMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    wordCount: number | null;
    characterCount: number | null;
    sentenceCount: number | null;
    paragraphCount: number | null;
    readabilityScore: number | null;
    lastUpdated: Date | null;
  };

  export type WritingAnalyticsMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    wordCount: number | null;
    characterCount: number | null;
    sentenceCount: number | null;
    paragraphCount: number | null;
    readabilityScore: number | null;
    lastUpdated: Date | null;
  };

  export type WritingAnalyticsCountAggregateOutputType = {
    id: number;
    projectId: number;
    wordCount: number;
    characterCount: number;
    sentenceCount: number;
    paragraphCount: number;
    readabilityScore: number;
    topicAnalysis: number;
    lastUpdated: number;
    _all: number;
  };

  export type WritingAnalyticsAvgAggregateInputType = {
    wordCount?: true;
    characterCount?: true;
    sentenceCount?: true;
    paragraphCount?: true;
    readabilityScore?: true;
  };

  export type WritingAnalyticsSumAggregateInputType = {
    wordCount?: true;
    characterCount?: true;
    sentenceCount?: true;
    paragraphCount?: true;
    readabilityScore?: true;
  };

  export type WritingAnalyticsMinAggregateInputType = {
    id?: true;
    projectId?: true;
    wordCount?: true;
    characterCount?: true;
    sentenceCount?: true;
    paragraphCount?: true;
    readabilityScore?: true;
    lastUpdated?: true;
  };

  export type WritingAnalyticsMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    wordCount?: true;
    characterCount?: true;
    sentenceCount?: true;
    paragraphCount?: true;
    readabilityScore?: true;
    lastUpdated?: true;
  };

  export type WritingAnalyticsCountAggregateInputType = {
    id?: true;
    projectId?: true;
    wordCount?: true;
    characterCount?: true;
    sentenceCount?: true;
    paragraphCount?: true;
    readabilityScore?: true;
    topicAnalysis?: true;
    lastUpdated?: true;
    _all?: true;
  };

  export type WritingAnalyticsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which WritingAnalytics to aggregate.
     */
    where?: WritingAnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WritingAnalytics to fetch.
     */
    orderBy?:
      | WritingAnalyticsOrderByWithRelationInput
      | WritingAnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: WritingAnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WritingAnalytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WritingAnalytics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned WritingAnalytics
     **/
    _count?: true | WritingAnalyticsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: WritingAnalyticsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: WritingAnalyticsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: WritingAnalyticsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: WritingAnalyticsMaxAggregateInputType;
  };

  export type GetWritingAnalyticsAggregateType<
    T extends WritingAnalyticsAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateWritingAnalytics]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWritingAnalytics[P]>
      : GetScalarType<T[P], AggregateWritingAnalytics[P]>;
  };

  export type WritingAnalyticsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: WritingAnalyticsWhereInput;
    orderBy?:
      | WritingAnalyticsOrderByWithAggregationInput
      | WritingAnalyticsOrderByWithAggregationInput[];
    by: WritingAnalyticsScalarFieldEnum[] | WritingAnalyticsScalarFieldEnum;
    having?: WritingAnalyticsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WritingAnalyticsCountAggregateInputType | true;
    _avg?: WritingAnalyticsAvgAggregateInputType;
    _sum?: WritingAnalyticsSumAggregateInputType;
    _min?: WritingAnalyticsMinAggregateInputType;
    _max?: WritingAnalyticsMaxAggregateInputType;
  };

  export type WritingAnalyticsGroupByOutputType = {
    id: string;
    projectId: string;
    wordCount: number;
    characterCount: number;
    sentenceCount: number;
    paragraphCount: number;
    readabilityScore: number | null;
    topicAnalysis: JsonValue | null;
    lastUpdated: Date;
    _count: WritingAnalyticsCountAggregateOutputType | null;
    _avg: WritingAnalyticsAvgAggregateOutputType | null;
    _sum: WritingAnalyticsSumAggregateOutputType | null;
    _min: WritingAnalyticsMinAggregateOutputType | null;
    _max: WritingAnalyticsMaxAggregateOutputType | null;
  };

  type GetWritingAnalyticsGroupByPayload<
    T extends WritingAnalyticsGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WritingAnalyticsGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof WritingAnalyticsGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], WritingAnalyticsGroupByOutputType[P]>
          : GetScalarType<T[P], WritingAnalyticsGroupByOutputType[P]>;
      }
    >
  >;

  export type WritingAnalyticsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      wordCount?: boolean;
      characterCount?: boolean;
      sentenceCount?: boolean;
      paragraphCount?: boolean;
      readabilityScore?: boolean;
      topicAnalysis?: boolean;
      lastUpdated?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["writingAnalytics"]
  >;

  export type WritingAnalyticsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      wordCount?: boolean;
      characterCount?: boolean;
      sentenceCount?: boolean;
      paragraphCount?: boolean;
      readabilityScore?: boolean;
      topicAnalysis?: boolean;
      lastUpdated?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["writingAnalytics"]
  >;

  export type WritingAnalyticsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      wordCount?: boolean;
      characterCount?: boolean;
      sentenceCount?: boolean;
      paragraphCount?: boolean;
      readabilityScore?: boolean;
      topicAnalysis?: boolean;
      lastUpdated?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["writingAnalytics"]
  >;

  export type WritingAnalyticsSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    wordCount?: boolean;
    characterCount?: boolean;
    sentenceCount?: boolean;
    paragraphCount?: boolean;
    readabilityScore?: boolean;
    topicAnalysis?: boolean;
    lastUpdated?: boolean;
  };

  export type WritingAnalyticsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "projectId"
    | "wordCount"
    | "characterCount"
    | "sentenceCount"
    | "paragraphCount"
    | "readabilityScore"
    | "topicAnalysis"
    | "lastUpdated",
    ExtArgs["result"]["writingAnalytics"]
  >;
  export type WritingAnalyticsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
  };
  export type WritingAnalyticsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
  };
  export type WritingAnalyticsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
  };

  export type $WritingAnalyticsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "WritingAnalytics";
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        projectId: string;
        wordCount: number;
        characterCount: number;
        sentenceCount: number;
        paragraphCount: number;
        readabilityScore: number | null;
        topicAnalysis: Prisma.JsonValue | null;
        lastUpdated: Date;
      },
      ExtArgs["result"]["writingAnalytics"]
    >;
    composites: {};
  };

  type WritingAnalyticsGetPayload<
    S extends boolean | null | undefined | WritingAnalyticsDefaultArgs,
  > = $Result.GetResult<Prisma.$WritingAnalyticsPayload, S>;

  type WritingAnalyticsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    WritingAnalyticsFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: WritingAnalyticsCountAggregateInputType | true;
  };

  export interface WritingAnalyticsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["WritingAnalytics"];
      meta: { name: "WritingAnalytics" };
    };
    /**
     * Find zero or one WritingAnalytics that matches the filter.
     * @param {WritingAnalyticsFindUniqueArgs} args - Arguments to find a WritingAnalytics
     * @example
     * // Get one WritingAnalytics
     * const writingAnalytics = await prisma.writingAnalytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WritingAnalyticsFindUniqueArgs>(
      args: SelectSubset<T, WritingAnalyticsFindUniqueArgs<ExtArgs>>,
    ): Prisma__WritingAnalyticsClient<
      $Result.GetResult<
        Prisma.$WritingAnalyticsPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one WritingAnalytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WritingAnalyticsFindUniqueOrThrowArgs} args - Arguments to find a WritingAnalytics
     * @example
     * // Get one WritingAnalytics
     * const writingAnalytics = await prisma.writingAnalytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WritingAnalyticsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, WritingAnalyticsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__WritingAnalyticsClient<
      $Result.GetResult<
        Prisma.$WritingAnalyticsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first WritingAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingAnalyticsFindFirstArgs} args - Arguments to find a WritingAnalytics
     * @example
     * // Get one WritingAnalytics
     * const writingAnalytics = await prisma.writingAnalytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WritingAnalyticsFindFirstArgs>(
      args?: SelectSubset<T, WritingAnalyticsFindFirstArgs<ExtArgs>>,
    ): Prisma__WritingAnalyticsClient<
      $Result.GetResult<
        Prisma.$WritingAnalyticsPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first WritingAnalytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingAnalyticsFindFirstOrThrowArgs} args - Arguments to find a WritingAnalytics
     * @example
     * // Get one WritingAnalytics
     * const writingAnalytics = await prisma.writingAnalytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WritingAnalyticsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WritingAnalyticsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__WritingAnalyticsClient<
      $Result.GetResult<
        Prisma.$WritingAnalyticsPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more WritingAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingAnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WritingAnalytics
     * const writingAnalytics = await prisma.writingAnalytics.findMany()
     *
     * // Get first 10 WritingAnalytics
     * const writingAnalytics = await prisma.writingAnalytics.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const writingAnalyticsWithIdOnly = await prisma.writingAnalytics.findMany({ select: { id: true } })
     *
     */
    findMany<T extends WritingAnalyticsFindManyArgs>(
      args?: SelectSubset<T, WritingAnalyticsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$WritingAnalyticsPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a WritingAnalytics.
     * @param {WritingAnalyticsCreateArgs} args - Arguments to create a WritingAnalytics.
     * @example
     * // Create one WritingAnalytics
     * const WritingAnalytics = await prisma.writingAnalytics.create({
     *   data: {
     *     // ... data to create a WritingAnalytics
     *   }
     * })
     *
     */
    create<T extends WritingAnalyticsCreateArgs>(
      args: SelectSubset<T, WritingAnalyticsCreateArgs<ExtArgs>>,
    ): Prisma__WritingAnalyticsClient<
      $Result.GetResult<
        Prisma.$WritingAnalyticsPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many WritingAnalytics.
     * @param {WritingAnalyticsCreateManyArgs} args - Arguments to create many WritingAnalytics.
     * @example
     * // Create many WritingAnalytics
     * const writingAnalytics = await prisma.writingAnalytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends WritingAnalyticsCreateManyArgs>(
      args?: SelectSubset<T, WritingAnalyticsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many WritingAnalytics and returns the data saved in the database.
     * @param {WritingAnalyticsCreateManyAndReturnArgs} args - Arguments to create many WritingAnalytics.
     * @example
     * // Create many WritingAnalytics
     * const writingAnalytics = await prisma.writingAnalytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many WritingAnalytics and only return the `id`
     * const writingAnalyticsWithIdOnly = await prisma.writingAnalytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends WritingAnalyticsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, WritingAnalyticsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$WritingAnalyticsPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a WritingAnalytics.
     * @param {WritingAnalyticsDeleteArgs} args - Arguments to delete one WritingAnalytics.
     * @example
     * // Delete one WritingAnalytics
     * const WritingAnalytics = await prisma.writingAnalytics.delete({
     *   where: {
     *     // ... filter to delete one WritingAnalytics
     *   }
     * })
     *
     */
    delete<T extends WritingAnalyticsDeleteArgs>(
      args: SelectSubset<T, WritingAnalyticsDeleteArgs<ExtArgs>>,
    ): Prisma__WritingAnalyticsClient<
      $Result.GetResult<
        Prisma.$WritingAnalyticsPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one WritingAnalytics.
     * @param {WritingAnalyticsUpdateArgs} args - Arguments to update one WritingAnalytics.
     * @example
     * // Update one WritingAnalytics
     * const writingAnalytics = await prisma.writingAnalytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends WritingAnalyticsUpdateArgs>(
      args: SelectSubset<T, WritingAnalyticsUpdateArgs<ExtArgs>>,
    ): Prisma__WritingAnalyticsClient<
      $Result.GetResult<
        Prisma.$WritingAnalyticsPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more WritingAnalytics.
     * @param {WritingAnalyticsDeleteManyArgs} args - Arguments to filter WritingAnalytics to delete.
     * @example
     * // Delete a few WritingAnalytics
     * const { count } = await prisma.writingAnalytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends WritingAnalyticsDeleteManyArgs>(
      args?: SelectSubset<T, WritingAnalyticsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more WritingAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingAnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WritingAnalytics
     * const writingAnalytics = await prisma.writingAnalytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends WritingAnalyticsUpdateManyArgs>(
      args: SelectSubset<T, WritingAnalyticsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more WritingAnalytics and returns the data updated in the database.
     * @param {WritingAnalyticsUpdateManyAndReturnArgs} args - Arguments to update many WritingAnalytics.
     * @example
     * // Update many WritingAnalytics
     * const writingAnalytics = await prisma.writingAnalytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more WritingAnalytics and only return the `id`
     * const writingAnalyticsWithIdOnly = await prisma.writingAnalytics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends WritingAnalyticsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, WritingAnalyticsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$WritingAnalyticsPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one WritingAnalytics.
     * @param {WritingAnalyticsUpsertArgs} args - Arguments to update or create a WritingAnalytics.
     * @example
     * // Update or create a WritingAnalytics
     * const writingAnalytics = await prisma.writingAnalytics.upsert({
     *   create: {
     *     // ... data to create a WritingAnalytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WritingAnalytics we want to update
     *   }
     * })
     */
    upsert<T extends WritingAnalyticsUpsertArgs>(
      args: SelectSubset<T, WritingAnalyticsUpsertArgs<ExtArgs>>,
    ): Prisma__WritingAnalyticsClient<
      $Result.GetResult<
        Prisma.$WritingAnalyticsPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of WritingAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingAnalyticsCountArgs} args - Arguments to filter WritingAnalytics to count.
     * @example
     * // Count the number of WritingAnalytics
     * const count = await prisma.writingAnalytics.count({
     *   where: {
     *     // ... the filter for the WritingAnalytics we want to count
     *   }
     * })
     **/
    count<T extends WritingAnalyticsCountArgs>(
      args?: Subset<T, WritingAnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], WritingAnalyticsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a WritingAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingAnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends WritingAnalyticsAggregateArgs>(
      args: Subset<T, WritingAnalyticsAggregateArgs>,
    ): Prisma.PrismaPromise<GetWritingAnalyticsAggregateType<T>>;

    /**
     * Group by WritingAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WritingAnalyticsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends WritingAnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WritingAnalyticsGroupByArgs["orderBy"] }
        : { orderBy?: WritingAnalyticsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, WritingAnalyticsGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetWritingAnalyticsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the WritingAnalytics model
     */
    readonly fields: WritingAnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WritingAnalytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WritingAnalyticsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProjectDefaultArgs<ExtArgs>>,
    ): Prisma__ProjectClient<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the WritingAnalytics model
   */
  interface WritingAnalyticsFieldRefs {
    readonly id: FieldRef<"WritingAnalytics", "String">;
    readonly projectId: FieldRef<"WritingAnalytics", "String">;
    readonly wordCount: FieldRef<"WritingAnalytics", "Int">;
    readonly characterCount: FieldRef<"WritingAnalytics", "Int">;
    readonly sentenceCount: FieldRef<"WritingAnalytics", "Int">;
    readonly paragraphCount: FieldRef<"WritingAnalytics", "Int">;
    readonly readabilityScore: FieldRef<"WritingAnalytics", "Float">;
    readonly topicAnalysis: FieldRef<"WritingAnalytics", "Json">;
    readonly lastUpdated: FieldRef<"WritingAnalytics", "DateTime">;
  }

  // Custom InputTypes
  /**
   * WritingAnalytics findUnique
   */
  export type WritingAnalyticsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WritingAnalytics
     */
    select?: WritingAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WritingAnalytics
     */
    omit?: WritingAnalyticsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingAnalyticsInclude<ExtArgs> | null;
    /**
     * Filter, which WritingAnalytics to fetch.
     */
    where: WritingAnalyticsWhereUniqueInput;
  };

  /**
   * WritingAnalytics findUniqueOrThrow
   */
  export type WritingAnalyticsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WritingAnalytics
     */
    select?: WritingAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WritingAnalytics
     */
    omit?: WritingAnalyticsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingAnalyticsInclude<ExtArgs> | null;
    /**
     * Filter, which WritingAnalytics to fetch.
     */
    where: WritingAnalyticsWhereUniqueInput;
  };

  /**
   * WritingAnalytics findFirst
   */
  export type WritingAnalyticsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WritingAnalytics
     */
    select?: WritingAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WritingAnalytics
     */
    omit?: WritingAnalyticsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingAnalyticsInclude<ExtArgs> | null;
    /**
     * Filter, which WritingAnalytics to fetch.
     */
    where?: WritingAnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WritingAnalytics to fetch.
     */
    orderBy?:
      | WritingAnalyticsOrderByWithRelationInput
      | WritingAnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WritingAnalytics.
     */
    cursor?: WritingAnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WritingAnalytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WritingAnalytics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WritingAnalytics.
     */
    distinct?:
      | WritingAnalyticsScalarFieldEnum
      | WritingAnalyticsScalarFieldEnum[];
  };

  /**
   * WritingAnalytics findFirstOrThrow
   */
  export type WritingAnalyticsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WritingAnalytics
     */
    select?: WritingAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WritingAnalytics
     */
    omit?: WritingAnalyticsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingAnalyticsInclude<ExtArgs> | null;
    /**
     * Filter, which WritingAnalytics to fetch.
     */
    where?: WritingAnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WritingAnalytics to fetch.
     */
    orderBy?:
      | WritingAnalyticsOrderByWithRelationInput
      | WritingAnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WritingAnalytics.
     */
    cursor?: WritingAnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WritingAnalytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WritingAnalytics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WritingAnalytics.
     */
    distinct?:
      | WritingAnalyticsScalarFieldEnum
      | WritingAnalyticsScalarFieldEnum[];
  };

  /**
   * WritingAnalytics findMany
   */
  export type WritingAnalyticsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WritingAnalytics
     */
    select?: WritingAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WritingAnalytics
     */
    omit?: WritingAnalyticsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingAnalyticsInclude<ExtArgs> | null;
    /**
     * Filter, which WritingAnalytics to fetch.
     */
    where?: WritingAnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WritingAnalytics to fetch.
     */
    orderBy?:
      | WritingAnalyticsOrderByWithRelationInput
      | WritingAnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing WritingAnalytics.
     */
    cursor?: WritingAnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WritingAnalytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WritingAnalytics.
     */
    skip?: number;
    distinct?:
      | WritingAnalyticsScalarFieldEnum
      | WritingAnalyticsScalarFieldEnum[];
  };

  /**
   * WritingAnalytics create
   */
  export type WritingAnalyticsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WritingAnalytics
     */
    select?: WritingAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WritingAnalytics
     */
    omit?: WritingAnalyticsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingAnalyticsInclude<ExtArgs> | null;
    /**
     * The data needed to create a WritingAnalytics.
     */
    data: XOR<
      WritingAnalyticsCreateInput,
      WritingAnalyticsUncheckedCreateInput
    >;
  };

  /**
   * WritingAnalytics createMany
   */
  export type WritingAnalyticsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many WritingAnalytics.
     */
    data: WritingAnalyticsCreateManyInput | WritingAnalyticsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * WritingAnalytics createManyAndReturn
   */
  export type WritingAnalyticsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WritingAnalytics
     */
    select?: WritingAnalyticsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WritingAnalytics
     */
    omit?: WritingAnalyticsOmit<ExtArgs> | null;
    /**
     * The data used to create many WritingAnalytics.
     */
    data: WritingAnalyticsCreateManyInput | WritingAnalyticsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingAnalyticsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * WritingAnalytics update
   */
  export type WritingAnalyticsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WritingAnalytics
     */
    select?: WritingAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WritingAnalytics
     */
    omit?: WritingAnalyticsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingAnalyticsInclude<ExtArgs> | null;
    /**
     * The data needed to update a WritingAnalytics.
     */
    data: XOR<
      WritingAnalyticsUpdateInput,
      WritingAnalyticsUncheckedUpdateInput
    >;
    /**
     * Choose, which WritingAnalytics to update.
     */
    where: WritingAnalyticsWhereUniqueInput;
  };

  /**
   * WritingAnalytics updateMany
   */
  export type WritingAnalyticsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update WritingAnalytics.
     */
    data: XOR<
      WritingAnalyticsUpdateManyMutationInput,
      WritingAnalyticsUncheckedUpdateManyInput
    >;
    /**
     * Filter which WritingAnalytics to update
     */
    where?: WritingAnalyticsWhereInput;
    /**
     * Limit how many WritingAnalytics to update.
     */
    limit?: number;
  };

  /**
   * WritingAnalytics updateManyAndReturn
   */
  export type WritingAnalyticsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WritingAnalytics
     */
    select?: WritingAnalyticsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WritingAnalytics
     */
    omit?: WritingAnalyticsOmit<ExtArgs> | null;
    /**
     * The data used to update WritingAnalytics.
     */
    data: XOR<
      WritingAnalyticsUpdateManyMutationInput,
      WritingAnalyticsUncheckedUpdateManyInput
    >;
    /**
     * Filter which WritingAnalytics to update
     */
    where?: WritingAnalyticsWhereInput;
    /**
     * Limit how many WritingAnalytics to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingAnalyticsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * WritingAnalytics upsert
   */
  export type WritingAnalyticsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WritingAnalytics
     */
    select?: WritingAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WritingAnalytics
     */
    omit?: WritingAnalyticsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingAnalyticsInclude<ExtArgs> | null;
    /**
     * The filter to search for the WritingAnalytics to update in case it exists.
     */
    where: WritingAnalyticsWhereUniqueInput;
    /**
     * In case the WritingAnalytics found by the `where` argument doesn't exist, create a new WritingAnalytics with this data.
     */
    create: XOR<
      WritingAnalyticsCreateInput,
      WritingAnalyticsUncheckedCreateInput
    >;
    /**
     * In case the WritingAnalytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      WritingAnalyticsUpdateInput,
      WritingAnalyticsUncheckedUpdateInput
    >;
  };

  /**
   * WritingAnalytics delete
   */
  export type WritingAnalyticsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WritingAnalytics
     */
    select?: WritingAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WritingAnalytics
     */
    omit?: WritingAnalyticsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingAnalyticsInclude<ExtArgs> | null;
    /**
     * Filter which WritingAnalytics to delete.
     */
    where: WritingAnalyticsWhereUniqueInput;
  };

  /**
   * WritingAnalytics deleteMany
   */
  export type WritingAnalyticsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which WritingAnalytics to delete
     */
    where?: WritingAnalyticsWhereInput;
    /**
     * Limit how many WritingAnalytics to delete.
     */
    limit?: number;
  };

  /**
   * WritingAnalytics without action
   */
  export type WritingAnalyticsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the WritingAnalytics
     */
    select?: WritingAnalyticsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WritingAnalytics
     */
    omit?: WritingAnalyticsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WritingAnalyticsInclude<ExtArgs> | null;
  };

  /**
   * Model AiInteraction
   */

  export type AggregateAiInteraction = {
    _count: AiInteractionCountAggregateOutputType | null;
    _avg: AiInteractionAvgAggregateOutputType | null;
    _sum: AiInteractionSumAggregateOutputType | null;
    _min: AiInteractionMinAggregateOutputType | null;
    _max: AiInteractionMaxAggregateOutputType | null;
  };

  export type AiInteractionAvgAggregateOutputType = {
    tokensUsed: number | null;
  };

  export type AiInteractionSumAggregateOutputType = {
    tokensUsed: number | null;
  };

  export type AiInteractionMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    prompt: string | null;
    response: string | null;
    tokensUsed: number | null;
    createdAt: Date | null;
    interactionType: string | null;
  };

  export type AiInteractionMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    prompt: string | null;
    response: string | null;
    tokensUsed: number | null;
    createdAt: Date | null;
    interactionType: string | null;
  };

  export type AiInteractionCountAggregateOutputType = {
    id: number;
    projectId: number;
    prompt: number;
    response: number;
    tokensUsed: number;
    createdAt: number;
    interactionType: number;
    _all: number;
  };

  export type AiInteractionAvgAggregateInputType = {
    tokensUsed?: true;
  };

  export type AiInteractionSumAggregateInputType = {
    tokensUsed?: true;
  };

  export type AiInteractionMinAggregateInputType = {
    id?: true;
    projectId?: true;
    prompt?: true;
    response?: true;
    tokensUsed?: true;
    createdAt?: true;
    interactionType?: true;
  };

  export type AiInteractionMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    prompt?: true;
    response?: true;
    tokensUsed?: true;
    createdAt?: true;
    interactionType?: true;
  };

  export type AiInteractionCountAggregateInputType = {
    id?: true;
    projectId?: true;
    prompt?: true;
    response?: true;
    tokensUsed?: true;
    createdAt?: true;
    interactionType?: true;
    _all?: true;
  };

  export type AiInteractionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AiInteraction to aggregate.
     */
    where?: AiInteractionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiInteractions to fetch.
     */
    orderBy?:
      | AiInteractionOrderByWithRelationInput
      | AiInteractionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AiInteractionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiInteractions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiInteractions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AiInteractions
     **/
    _count?: true | AiInteractionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AiInteractionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AiInteractionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AiInteractionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AiInteractionMaxAggregateInputType;
  };

  export type GetAiInteractionAggregateType<
    T extends AiInteractionAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateAiInteraction]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiInteraction[P]>
      : GetScalarType<T[P], AggregateAiInteraction[P]>;
  };

  export type AiInteractionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AiInteractionWhereInput;
    orderBy?:
      | AiInteractionOrderByWithAggregationInput
      | AiInteractionOrderByWithAggregationInput[];
    by: AiInteractionScalarFieldEnum[] | AiInteractionScalarFieldEnum;
    having?: AiInteractionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AiInteractionCountAggregateInputType | true;
    _avg?: AiInteractionAvgAggregateInputType;
    _sum?: AiInteractionSumAggregateInputType;
    _min?: AiInteractionMinAggregateInputType;
    _max?: AiInteractionMaxAggregateInputType;
  };

  export type AiInteractionGroupByOutputType = {
    id: string;
    projectId: string;
    prompt: string;
    response: string;
    tokensUsed: number;
    createdAt: Date;
    interactionType: string;
    _count: AiInteractionCountAggregateOutputType | null;
    _avg: AiInteractionAvgAggregateOutputType | null;
    _sum: AiInteractionSumAggregateOutputType | null;
    _min: AiInteractionMinAggregateOutputType | null;
    _max: AiInteractionMaxAggregateOutputType | null;
  };

  type GetAiInteractionGroupByPayload<T extends AiInteractionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AiInteractionGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof AiInteractionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiInteractionGroupByOutputType[P]>
            : GetScalarType<T[P], AiInteractionGroupByOutputType[P]>;
        }
      >
    >;

  export type AiInteractionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      prompt?: boolean;
      response?: boolean;
      tokensUsed?: boolean;
      createdAt?: boolean;
      interactionType?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["aiInteraction"]
  >;

  export type AiInteractionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      prompt?: boolean;
      response?: boolean;
      tokensUsed?: boolean;
      createdAt?: boolean;
      interactionType?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["aiInteraction"]
  >;

  export type AiInteractionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      projectId?: boolean;
      prompt?: boolean;
      response?: boolean;
      tokensUsed?: boolean;
      createdAt?: boolean;
      interactionType?: boolean;
      project?: boolean | ProjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["aiInteraction"]
  >;

  export type AiInteractionSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    prompt?: boolean;
    response?: boolean;
    tokensUsed?: boolean;
    createdAt?: boolean;
    interactionType?: boolean;
  };

  export type AiInteractionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "projectId"
    | "prompt"
    | "response"
    | "tokensUsed"
    | "createdAt"
    | "interactionType",
    ExtArgs["result"]["aiInteraction"]
  >;
  export type AiInteractionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
  };
  export type AiInteractionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
  };
  export type AiInteractionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>;
  };

  export type $AiInteractionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "AiInteraction";
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        projectId: string;
        prompt: string;
        response: string;
        tokensUsed: number;
        createdAt: Date;
        interactionType: string;
      },
      ExtArgs["result"]["aiInteraction"]
    >;
    composites: {};
  };

  type AiInteractionGetPayload<
    S extends boolean | null | undefined | AiInteractionDefaultArgs,
  > = $Result.GetResult<Prisma.$AiInteractionPayload, S>;

  type AiInteractionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    AiInteractionFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: AiInteractionCountAggregateInputType | true;
  };

  export interface AiInteractionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["AiInteraction"];
      meta: { name: "AiInteraction" };
    };
    /**
     * Find zero or one AiInteraction that matches the filter.
     * @param {AiInteractionFindUniqueArgs} args - Arguments to find a AiInteraction
     * @example
     * // Get one AiInteraction
     * const aiInteraction = await prisma.aiInteraction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiInteractionFindUniqueArgs>(
      args: SelectSubset<T, AiInteractionFindUniqueArgs<ExtArgs>>,
    ): Prisma__AiInteractionClient<
      $Result.GetResult<
        Prisma.$AiInteractionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one AiInteraction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiInteractionFindUniqueOrThrowArgs} args - Arguments to find a AiInteraction
     * @example
     * // Get one AiInteraction
     * const aiInteraction = await prisma.aiInteraction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiInteractionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AiInteractionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AiInteractionClient<
      $Result.GetResult<
        Prisma.$AiInteractionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AiInteraction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInteractionFindFirstArgs} args - Arguments to find a AiInteraction
     * @example
     * // Get one AiInteraction
     * const aiInteraction = await prisma.aiInteraction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiInteractionFindFirstArgs>(
      args?: SelectSubset<T, AiInteractionFindFirstArgs<ExtArgs>>,
    ): Prisma__AiInteractionClient<
      $Result.GetResult<
        Prisma.$AiInteractionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AiInteraction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInteractionFindFirstOrThrowArgs} args - Arguments to find a AiInteraction
     * @example
     * // Get one AiInteraction
     * const aiInteraction = await prisma.aiInteraction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiInteractionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AiInteractionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AiInteractionClient<
      $Result.GetResult<
        Prisma.$AiInteractionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more AiInteractions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInteractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiInteractions
     * const aiInteractions = await prisma.aiInteraction.findMany()
     *
     * // Get first 10 AiInteractions
     * const aiInteractions = await prisma.aiInteraction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const aiInteractionWithIdOnly = await prisma.aiInteraction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AiInteractionFindManyArgs>(
      args?: SelectSubset<T, AiInteractionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AiInteractionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a AiInteraction.
     * @param {AiInteractionCreateArgs} args - Arguments to create a AiInteraction.
     * @example
     * // Create one AiInteraction
     * const AiInteraction = await prisma.aiInteraction.create({
     *   data: {
     *     // ... data to create a AiInteraction
     *   }
     * })
     *
     */
    create<T extends AiInteractionCreateArgs>(
      args: SelectSubset<T, AiInteractionCreateArgs<ExtArgs>>,
    ): Prisma__AiInteractionClient<
      $Result.GetResult<
        Prisma.$AiInteractionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many AiInteractions.
     * @param {AiInteractionCreateManyArgs} args - Arguments to create many AiInteractions.
     * @example
     * // Create many AiInteractions
     * const aiInteraction = await prisma.aiInteraction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AiInteractionCreateManyArgs>(
      args?: SelectSubset<T, AiInteractionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many AiInteractions and returns the data saved in the database.
     * @param {AiInteractionCreateManyAndReturnArgs} args - Arguments to create many AiInteractions.
     * @example
     * // Create many AiInteractions
     * const aiInteraction = await prisma.aiInteraction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AiInteractions and only return the `id`
     * const aiInteractionWithIdOnly = await prisma.aiInteraction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AiInteractionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AiInteractionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AiInteractionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a AiInteraction.
     * @param {AiInteractionDeleteArgs} args - Arguments to delete one AiInteraction.
     * @example
     * // Delete one AiInteraction
     * const AiInteraction = await prisma.aiInteraction.delete({
     *   where: {
     *     // ... filter to delete one AiInteraction
     *   }
     * })
     *
     */
    delete<T extends AiInteractionDeleteArgs>(
      args: SelectSubset<T, AiInteractionDeleteArgs<ExtArgs>>,
    ): Prisma__AiInteractionClient<
      $Result.GetResult<
        Prisma.$AiInteractionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one AiInteraction.
     * @param {AiInteractionUpdateArgs} args - Arguments to update one AiInteraction.
     * @example
     * // Update one AiInteraction
     * const aiInteraction = await prisma.aiInteraction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AiInteractionUpdateArgs>(
      args: SelectSubset<T, AiInteractionUpdateArgs<ExtArgs>>,
    ): Prisma__AiInteractionClient<
      $Result.GetResult<
        Prisma.$AiInteractionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more AiInteractions.
     * @param {AiInteractionDeleteManyArgs} args - Arguments to filter AiInteractions to delete.
     * @example
     * // Delete a few AiInteractions
     * const { count } = await prisma.aiInteraction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AiInteractionDeleteManyArgs>(
      args?: SelectSubset<T, AiInteractionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AiInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInteractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiInteractions
     * const aiInteraction = await prisma.aiInteraction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AiInteractionUpdateManyArgs>(
      args: SelectSubset<T, AiInteractionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AiInteractions and returns the data updated in the database.
     * @param {AiInteractionUpdateManyAndReturnArgs} args - Arguments to update many AiInteractions.
     * @example
     * // Update many AiInteractions
     * const aiInteraction = await prisma.aiInteraction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AiInteractions and only return the `id`
     * const aiInteractionWithIdOnly = await prisma.aiInteraction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AiInteractionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AiInteractionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AiInteractionPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one AiInteraction.
     * @param {AiInteractionUpsertArgs} args - Arguments to update or create a AiInteraction.
     * @example
     * // Update or create a AiInteraction
     * const aiInteraction = await prisma.aiInteraction.upsert({
     *   create: {
     *     // ... data to create a AiInteraction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiInteraction we want to update
     *   }
     * })
     */
    upsert<T extends AiInteractionUpsertArgs>(
      args: SelectSubset<T, AiInteractionUpsertArgs<ExtArgs>>,
    ): Prisma__AiInteractionClient<
      $Result.GetResult<
        Prisma.$AiInteractionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of AiInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInteractionCountArgs} args - Arguments to filter AiInteractions to count.
     * @example
     * // Count the number of AiInteractions
     * const count = await prisma.aiInteraction.count({
     *   where: {
     *     // ... the filter for the AiInteractions we want to count
     *   }
     * })
     **/
    count<T extends AiInteractionCountArgs>(
      args?: Subset<T, AiInteractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AiInteractionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AiInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInteractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AiInteractionAggregateArgs>(
      args: Subset<T, AiInteractionAggregateArgs>,
    ): Prisma.PrismaPromise<GetAiInteractionAggregateType<T>>;

    /**
     * Group by AiInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInteractionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AiInteractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiInteractionGroupByArgs["orderBy"] }
        : { orderBy?: AiInteractionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AiInteractionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAiInteractionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AiInteraction model
     */
    readonly fields: AiInteractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiInteraction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiInteractionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProjectDefaultArgs<ExtArgs>>,
    ): Prisma__ProjectClient<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AiInteraction model
   */
  interface AiInteractionFieldRefs {
    readonly id: FieldRef<"AiInteraction", "String">;
    readonly projectId: FieldRef<"AiInteraction", "String">;
    readonly prompt: FieldRef<"AiInteraction", "String">;
    readonly response: FieldRef<"AiInteraction", "String">;
    readonly tokensUsed: FieldRef<"AiInteraction", "Int">;
    readonly createdAt: FieldRef<"AiInteraction", "DateTime">;
    readonly interactionType: FieldRef<"AiInteraction", "String">;
  }

  // Custom InputTypes
  /**
   * AiInteraction findUnique
   */
  export type AiInteractionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiInteraction
     */
    select?: AiInteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiInteraction
     */
    omit?: AiInteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInteractionInclude<ExtArgs> | null;
    /**
     * Filter, which AiInteraction to fetch.
     */
    where: AiInteractionWhereUniqueInput;
  };

  /**
   * AiInteraction findUniqueOrThrow
   */
  export type AiInteractionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiInteraction
     */
    select?: AiInteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiInteraction
     */
    omit?: AiInteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInteractionInclude<ExtArgs> | null;
    /**
     * Filter, which AiInteraction to fetch.
     */
    where: AiInteractionWhereUniqueInput;
  };

  /**
   * AiInteraction findFirst
   */
  export type AiInteractionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiInteraction
     */
    select?: AiInteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiInteraction
     */
    omit?: AiInteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInteractionInclude<ExtArgs> | null;
    /**
     * Filter, which AiInteraction to fetch.
     */
    where?: AiInteractionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiInteractions to fetch.
     */
    orderBy?:
      | AiInteractionOrderByWithRelationInput
      | AiInteractionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AiInteractions.
     */
    cursor?: AiInteractionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiInteractions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiInteractions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AiInteractions.
     */
    distinct?: AiInteractionScalarFieldEnum | AiInteractionScalarFieldEnum[];
  };

  /**
   * AiInteraction findFirstOrThrow
   */
  export type AiInteractionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiInteraction
     */
    select?: AiInteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiInteraction
     */
    omit?: AiInteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInteractionInclude<ExtArgs> | null;
    /**
     * Filter, which AiInteraction to fetch.
     */
    where?: AiInteractionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiInteractions to fetch.
     */
    orderBy?:
      | AiInteractionOrderByWithRelationInput
      | AiInteractionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AiInteractions.
     */
    cursor?: AiInteractionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiInteractions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiInteractions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AiInteractions.
     */
    distinct?: AiInteractionScalarFieldEnum | AiInteractionScalarFieldEnum[];
  };

  /**
   * AiInteraction findMany
   */
  export type AiInteractionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiInteraction
     */
    select?: AiInteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiInteraction
     */
    omit?: AiInteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInteractionInclude<ExtArgs> | null;
    /**
     * Filter, which AiInteractions to fetch.
     */
    where?: AiInteractionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiInteractions to fetch.
     */
    orderBy?:
      | AiInteractionOrderByWithRelationInput
      | AiInteractionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AiInteractions.
     */
    cursor?: AiInteractionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiInteractions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiInteractions.
     */
    skip?: number;
    distinct?: AiInteractionScalarFieldEnum | AiInteractionScalarFieldEnum[];
  };

  /**
   * AiInteraction create
   */
  export type AiInteractionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiInteraction
     */
    select?: AiInteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiInteraction
     */
    omit?: AiInteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInteractionInclude<ExtArgs> | null;
    /**
     * The data needed to create a AiInteraction.
     */
    data: XOR<AiInteractionCreateInput, AiInteractionUncheckedCreateInput>;
  };

  /**
   * AiInteraction createMany
   */
  export type AiInteractionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AiInteractions.
     */
    data: AiInteractionCreateManyInput | AiInteractionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AiInteraction createManyAndReturn
   */
  export type AiInteractionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiInteraction
     */
    select?: AiInteractionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AiInteraction
     */
    omit?: AiInteractionOmit<ExtArgs> | null;
    /**
     * The data used to create many AiInteractions.
     */
    data: AiInteractionCreateManyInput | AiInteractionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInteractionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AiInteraction update
   */
  export type AiInteractionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiInteraction
     */
    select?: AiInteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiInteraction
     */
    omit?: AiInteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInteractionInclude<ExtArgs> | null;
    /**
     * The data needed to update a AiInteraction.
     */
    data: XOR<AiInteractionUpdateInput, AiInteractionUncheckedUpdateInput>;
    /**
     * Choose, which AiInteraction to update.
     */
    where: AiInteractionWhereUniqueInput;
  };

  /**
   * AiInteraction updateMany
   */
  export type AiInteractionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AiInteractions.
     */
    data: XOR<
      AiInteractionUpdateManyMutationInput,
      AiInteractionUncheckedUpdateManyInput
    >;
    /**
     * Filter which AiInteractions to update
     */
    where?: AiInteractionWhereInput;
    /**
     * Limit how many AiInteractions to update.
     */
    limit?: number;
  };

  /**
   * AiInteraction updateManyAndReturn
   */
  export type AiInteractionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiInteraction
     */
    select?: AiInteractionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AiInteraction
     */
    omit?: AiInteractionOmit<ExtArgs> | null;
    /**
     * The data used to update AiInteractions.
     */
    data: XOR<
      AiInteractionUpdateManyMutationInput,
      AiInteractionUncheckedUpdateManyInput
    >;
    /**
     * Filter which AiInteractions to update
     */
    where?: AiInteractionWhereInput;
    /**
     * Limit how many AiInteractions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInteractionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AiInteraction upsert
   */
  export type AiInteractionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiInteraction
     */
    select?: AiInteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiInteraction
     */
    omit?: AiInteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInteractionInclude<ExtArgs> | null;
    /**
     * The filter to search for the AiInteraction to update in case it exists.
     */
    where: AiInteractionWhereUniqueInput;
    /**
     * In case the AiInteraction found by the `where` argument doesn't exist, create a new AiInteraction with this data.
     */
    create: XOR<AiInteractionCreateInput, AiInteractionUncheckedCreateInput>;
    /**
     * In case the AiInteraction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiInteractionUpdateInput, AiInteractionUncheckedUpdateInput>;
  };

  /**
   * AiInteraction delete
   */
  export type AiInteractionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiInteraction
     */
    select?: AiInteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiInteraction
     */
    omit?: AiInteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInteractionInclude<ExtArgs> | null;
    /**
     * Filter which AiInteraction to delete.
     */
    where: AiInteractionWhereUniqueInput;
  };

  /**
   * AiInteraction deleteMany
   */
  export type AiInteractionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AiInteractions to delete
     */
    where?: AiInteractionWhereInput;
    /**
     * Limit how many AiInteractions to delete.
     */
    limit?: number;
  };

  /**
   * AiInteraction without action
   */
  export type AiInteractionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AiInteraction
     */
    select?: AiInteractionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiInteraction
     */
    omit?: AiInteractionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInteractionInclude<ExtArgs> | null;
  };

  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
  };

  export type SubscriptionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    stripeSubscriptionId: string | null;
    stripePriceId: string | null;
    stripeCurrentPeriodEnd: Date | null;
    stripeCustomerId: string | null;
    planId: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    stripeSubscriptionId: string | null;
    stripePriceId: string | null;
    stripeCurrentPeriodEnd: Date | null;
    stripeCustomerId: string | null;
    planId: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type SubscriptionCountAggregateOutputType = {
    id: number;
    userId: number;
    stripeSubscriptionId: number;
    stripePriceId: number;
    stripeCurrentPeriodEnd: number;
    stripeCustomerId: number;
    planId: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type SubscriptionMinAggregateInputType = {
    id?: true;
    userId?: true;
    stripeSubscriptionId?: true;
    stripePriceId?: true;
    stripeCurrentPeriodEnd?: true;
    stripeCustomerId?: true;
    planId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type SubscriptionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    stripeSubscriptionId?: true;
    stripePriceId?: true;
    stripeCurrentPeriodEnd?: true;
    stripeCustomerId?: true;
    planId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type SubscriptionCountAggregateInputType = {
    id?: true;
    userId?: true;
    stripeSubscriptionId?: true;
    stripePriceId?: true;
    stripeCurrentPeriodEnd?: true;
    stripeCustomerId?: true;
    planId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type SubscriptionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?:
      | SubscriptionOrderByWithRelationInput
      | SubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Subscriptions
     **/
    _count?: true | SubscriptionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubscriptionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubscriptionMaxAggregateInputType;
  };

  export type GetSubscriptionAggregateType<
    T extends SubscriptionAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateSubscription]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>;
  };

  export type SubscriptionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubscriptionWhereInput;
    orderBy?:
      | SubscriptionOrderByWithAggregationInput
      | SubscriptionOrderByWithAggregationInput[];
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum;
    having?: SubscriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriptionCountAggregateInputType | true;
    _min?: SubscriptionMinAggregateInputType;
    _max?: SubscriptionMaxAggregateInputType;
  };

  export type SubscriptionGroupByOutputType = {
    id: string;
    userId: string;
    stripeSubscriptionId: string | null;
    stripePriceId: string | null;
    stripeCurrentPeriodEnd: Date | null;
    stripeCustomerId: string | null;
    planId: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    _count: SubscriptionCountAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
  };

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SubscriptionGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof SubscriptionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>;
        }
      >
    >;

  export type SubscriptionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      stripeSubscriptionId?: boolean;
      stripePriceId?: boolean;
      stripeCurrentPeriodEnd?: boolean;
      stripeCustomerId?: boolean;
      planId?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["subscription"]
  >;

  export type SubscriptionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      stripeSubscriptionId?: boolean;
      stripePriceId?: boolean;
      stripeCurrentPeriodEnd?: boolean;
      stripeCustomerId?: boolean;
      planId?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["subscription"]
  >;

  export type SubscriptionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      stripeSubscriptionId?: boolean;
      stripePriceId?: boolean;
      stripeCurrentPeriodEnd?: boolean;
      stripeCustomerId?: boolean;
      planId?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["subscription"]
  >;

  export type SubscriptionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    stripeSubscriptionId?: boolean;
    stripePriceId?: boolean;
    stripeCurrentPeriodEnd?: boolean;
    stripeCustomerId?: boolean;
    planId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type SubscriptionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "stripeSubscriptionId"
    | "stripePriceId"
    | "stripeCurrentPeriodEnd"
    | "stripeCustomerId"
    | "planId"
    | "status"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["subscription"]
  >;
  export type SubscriptionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type SubscriptionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type SubscriptionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $SubscriptionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Subscription";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        stripeSubscriptionId: string | null;
        stripePriceId: string | null;
        stripeCurrentPeriodEnd: Date | null;
        stripeCustomerId: string | null;
        planId: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["subscription"]
    >;
    composites: {};
  };

  type SubscriptionGetPayload<
    S extends boolean | null | undefined | SubscriptionDefaultArgs,
  > = $Result.GetResult<Prisma.$SubscriptionPayload, S>;

  type SubscriptionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    SubscriptionFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: SubscriptionCountAggregateInputType | true;
  };

  export interface SubscriptionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Subscription"];
      meta: { name: "Subscription" };
    };
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(
      args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(
      args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     *
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SubscriptionFindManyArgs>(
      args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     *
     */
    create<T extends SubscriptionCreateArgs>(
      args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SubscriptionCreateManyArgs>(
      args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     *
     */
    delete<T extends SubscriptionDeleteArgs>(
      args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SubscriptionUpdateArgs>(
      args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(
      args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(
      args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(
      args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
     **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], SubscriptionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SubscriptionAggregateArgs>(
      args: Subset<T, SubscriptionAggregateArgs>,
    ): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>;

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs["orderBy"] }
        : { orderBy?: SubscriptionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetSubscriptionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Subscription model
     */
    readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", "String">;
    readonly userId: FieldRef<"Subscription", "String">;
    readonly stripeSubscriptionId: FieldRef<"Subscription", "String">;
    readonly stripePriceId: FieldRef<"Subscription", "String">;
    readonly stripeCurrentPeriodEnd: FieldRef<"Subscription", "DateTime">;
    readonly stripeCustomerId: FieldRef<"Subscription", "String">;
    readonly planId: FieldRef<"Subscription", "String">;
    readonly status: FieldRef<"Subscription", "String">;
    readonly createdAt: FieldRef<"Subscription", "DateTime">;
    readonly updatedAt: FieldRef<"Subscription", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput;
  };

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput;
  };

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?:
      | SubscriptionOrderByWithRelationInput
      | SubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?:
      | SubscriptionOrderByWithRelationInput
      | SubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?:
      | SubscriptionOrderByWithRelationInput
      | SubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscriptions.
     */
    skip?: number;
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>;
  };

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>;
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput;
  };

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<
      SubscriptionUpdateManyMutationInput,
      SubscriptionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput;
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number;
  };

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<
      SubscriptionUpdateManyMutationInput,
      SubscriptionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput;
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput;
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>;
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>;
  };

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput;
  };

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput;
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number;
  };

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
  };

  /**
   * Model SubscriptionUsage
   */

  export type AggregateSubscriptionUsage = {
    _count: SubscriptionUsageCountAggregateOutputType | null;
    _avg: SubscriptionUsageAvgAggregateOutputType | null;
    _sum: SubscriptionUsageSumAggregateOutputType | null;
    _min: SubscriptionUsageMinAggregateOutputType | null;
    _max: SubscriptionUsageMaxAggregateOutputType | null;
  };

  export type SubscriptionUsageAvgAggregateOutputType = {
    projectsCreated: number | null;
    collaboratorsInvited: number | null;
    aiSuggestionsUsed: number | null;
    wordsProcessed: number | null;
  };

  export type SubscriptionUsageSumAggregateOutputType = {
    projectsCreated: number | null;
    collaboratorsInvited: number | null;
    aiSuggestionsUsed: number | null;
    wordsProcessed: number | null;
  };

  export type SubscriptionUsageMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    projectsCreated: number | null;
    collaboratorsInvited: number | null;
    aiSuggestionsUsed: number | null;
    wordsProcessed: number | null;
    lastResetDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type SubscriptionUsageMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    projectsCreated: number | null;
    collaboratorsInvited: number | null;
    aiSuggestionsUsed: number | null;
    wordsProcessed: number | null;
    lastResetDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type SubscriptionUsageCountAggregateOutputType = {
    id: number;
    userId: number;
    projectsCreated: number;
    collaboratorsInvited: number;
    aiSuggestionsUsed: number;
    wordsProcessed: number;
    lastResetDate: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type SubscriptionUsageAvgAggregateInputType = {
    projectsCreated?: true;
    collaboratorsInvited?: true;
    aiSuggestionsUsed?: true;
    wordsProcessed?: true;
  };

  export type SubscriptionUsageSumAggregateInputType = {
    projectsCreated?: true;
    collaboratorsInvited?: true;
    aiSuggestionsUsed?: true;
    wordsProcessed?: true;
  };

  export type SubscriptionUsageMinAggregateInputType = {
    id?: true;
    userId?: true;
    projectsCreated?: true;
    collaboratorsInvited?: true;
    aiSuggestionsUsed?: true;
    wordsProcessed?: true;
    lastResetDate?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type SubscriptionUsageMaxAggregateInputType = {
    id?: true;
    userId?: true;
    projectsCreated?: true;
    collaboratorsInvited?: true;
    aiSuggestionsUsed?: true;
    wordsProcessed?: true;
    lastResetDate?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type SubscriptionUsageCountAggregateInputType = {
    id?: true;
    userId?: true;
    projectsCreated?: true;
    collaboratorsInvited?: true;
    aiSuggestionsUsed?: true;
    wordsProcessed?: true;
    lastResetDate?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type SubscriptionUsageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SubscriptionUsage to aggregate.
     */
    where?: SubscriptionUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionUsages to fetch.
     */
    orderBy?:
      | SubscriptionUsageOrderByWithRelationInput
      | SubscriptionUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SubscriptionUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SubscriptionUsages
     **/
    _count?: true | SubscriptionUsageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SubscriptionUsageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SubscriptionUsageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubscriptionUsageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubscriptionUsageMaxAggregateInputType;
  };

  export type GetSubscriptionUsageAggregateType<
    T extends SubscriptionUsageAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateSubscriptionUsage]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionUsage[P]>
      : GetScalarType<T[P], AggregateSubscriptionUsage[P]>;
  };

  export type SubscriptionUsageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubscriptionUsageWhereInput;
    orderBy?:
      | SubscriptionUsageOrderByWithAggregationInput
      | SubscriptionUsageOrderByWithAggregationInput[];
    by: SubscriptionUsageScalarFieldEnum[] | SubscriptionUsageScalarFieldEnum;
    having?: SubscriptionUsageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriptionUsageCountAggregateInputType | true;
    _avg?: SubscriptionUsageAvgAggregateInputType;
    _sum?: SubscriptionUsageSumAggregateInputType;
    _min?: SubscriptionUsageMinAggregateInputType;
    _max?: SubscriptionUsageMaxAggregateInputType;
  };

  export type SubscriptionUsageGroupByOutputType = {
    id: string;
    userId: string;
    projectsCreated: number;
    collaboratorsInvited: number;
    aiSuggestionsUsed: number;
    wordsProcessed: number;
    lastResetDate: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: SubscriptionUsageCountAggregateOutputType | null;
    _avg: SubscriptionUsageAvgAggregateOutputType | null;
    _sum: SubscriptionUsageSumAggregateOutputType | null;
    _min: SubscriptionUsageMinAggregateOutputType | null;
    _max: SubscriptionUsageMaxAggregateOutputType | null;
  };

  type GetSubscriptionUsageGroupByPayload<
    T extends SubscriptionUsageGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionUsageGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof SubscriptionUsageGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SubscriptionUsageGroupByOutputType[P]>
          : GetScalarType<T[P], SubscriptionUsageGroupByOutputType[P]>;
      }
    >
  >;

  export type SubscriptionUsageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      projectsCreated?: boolean;
      collaboratorsInvited?: boolean;
      aiSuggestionsUsed?: boolean;
      wordsProcessed?: boolean;
      lastResetDate?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["subscriptionUsage"]
  >;

  export type SubscriptionUsageSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      projectsCreated?: boolean;
      collaboratorsInvited?: boolean;
      aiSuggestionsUsed?: boolean;
      wordsProcessed?: boolean;
      lastResetDate?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["subscriptionUsage"]
  >;

  export type SubscriptionUsageSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      projectsCreated?: boolean;
      collaboratorsInvited?: boolean;
      aiSuggestionsUsed?: boolean;
      wordsProcessed?: boolean;
      lastResetDate?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["subscriptionUsage"]
  >;

  export type SubscriptionUsageSelectScalar = {
    id?: boolean;
    userId?: boolean;
    projectsCreated?: boolean;
    collaboratorsInvited?: boolean;
    aiSuggestionsUsed?: boolean;
    wordsProcessed?: boolean;
    lastResetDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type SubscriptionUsageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "projectsCreated"
    | "collaboratorsInvited"
    | "aiSuggestionsUsed"
    | "wordsProcessed"
    | "lastResetDate"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["subscriptionUsage"]
  >;

  export type $SubscriptionUsagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "SubscriptionUsage";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        projectsCreated: number;
        collaboratorsInvited: number;
        aiSuggestionsUsed: number;
        wordsProcessed: number;
        lastResetDate: Date;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["subscriptionUsage"]
    >;
    composites: {};
  };

  type SubscriptionUsageGetPayload<
    S extends boolean | null | undefined | SubscriptionUsageDefaultArgs,
  > = $Result.GetResult<Prisma.$SubscriptionUsagePayload, S>;

  type SubscriptionUsageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    SubscriptionUsageFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: SubscriptionUsageCountAggregateInputType | true;
  };

  export interface SubscriptionUsageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["SubscriptionUsage"];
      meta: { name: "SubscriptionUsage" };
    };
    /**
     * Find zero or one SubscriptionUsage that matches the filter.
     * @param {SubscriptionUsageFindUniqueArgs} args - Arguments to find a SubscriptionUsage
     * @example
     * // Get one SubscriptionUsage
     * const subscriptionUsage = await prisma.subscriptionUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionUsageFindUniqueArgs>(
      args: SelectSubset<T, SubscriptionUsageFindUniqueArgs<ExtArgs>>,
    ): Prisma__SubscriptionUsageClient<
      $Result.GetResult<
        Prisma.$SubscriptionUsagePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one SubscriptionUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionUsageFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionUsage
     * @example
     * // Get one SubscriptionUsage
     * const subscriptionUsage = await prisma.subscriptionUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionUsageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SubscriptionUsageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SubscriptionUsageClient<
      $Result.GetResult<
        Prisma.$SubscriptionUsagePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SubscriptionUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUsageFindFirstArgs} args - Arguments to find a SubscriptionUsage
     * @example
     * // Get one SubscriptionUsage
     * const subscriptionUsage = await prisma.subscriptionUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionUsageFindFirstArgs>(
      args?: SelectSubset<T, SubscriptionUsageFindFirstArgs<ExtArgs>>,
    ): Prisma__SubscriptionUsageClient<
      $Result.GetResult<
        Prisma.$SubscriptionUsagePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SubscriptionUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUsageFindFirstOrThrowArgs} args - Arguments to find a SubscriptionUsage
     * @example
     * // Get one SubscriptionUsage
     * const subscriptionUsage = await prisma.subscriptionUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionUsageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubscriptionUsageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SubscriptionUsageClient<
      $Result.GetResult<
        Prisma.$SubscriptionUsagePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more SubscriptionUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionUsages
     * const subscriptionUsages = await prisma.subscriptionUsage.findMany()
     *
     * // Get first 10 SubscriptionUsages
     * const subscriptionUsages = await prisma.subscriptionUsage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subscriptionUsageWithIdOnly = await prisma.subscriptionUsage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SubscriptionUsageFindManyArgs>(
      args?: SelectSubset<T, SubscriptionUsageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionUsagePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a SubscriptionUsage.
     * @param {SubscriptionUsageCreateArgs} args - Arguments to create a SubscriptionUsage.
     * @example
     * // Create one SubscriptionUsage
     * const SubscriptionUsage = await prisma.subscriptionUsage.create({
     *   data: {
     *     // ... data to create a SubscriptionUsage
     *   }
     * })
     *
     */
    create<T extends SubscriptionUsageCreateArgs>(
      args: SelectSubset<T, SubscriptionUsageCreateArgs<ExtArgs>>,
    ): Prisma__SubscriptionUsageClient<
      $Result.GetResult<
        Prisma.$SubscriptionUsagePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many SubscriptionUsages.
     * @param {SubscriptionUsageCreateManyArgs} args - Arguments to create many SubscriptionUsages.
     * @example
     * // Create many SubscriptionUsages
     * const subscriptionUsage = await prisma.subscriptionUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SubscriptionUsageCreateManyArgs>(
      args?: SelectSubset<T, SubscriptionUsageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many SubscriptionUsages and returns the data saved in the database.
     * @param {SubscriptionUsageCreateManyAndReturnArgs} args - Arguments to create many SubscriptionUsages.
     * @example
     * // Create many SubscriptionUsages
     * const subscriptionUsage = await prisma.subscriptionUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SubscriptionUsages and only return the `id`
     * const subscriptionUsageWithIdOnly = await prisma.subscriptionUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SubscriptionUsageCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SubscriptionUsageCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionUsagePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a SubscriptionUsage.
     * @param {SubscriptionUsageDeleteArgs} args - Arguments to delete one SubscriptionUsage.
     * @example
     * // Delete one SubscriptionUsage
     * const SubscriptionUsage = await prisma.subscriptionUsage.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionUsage
     *   }
     * })
     *
     */
    delete<T extends SubscriptionUsageDeleteArgs>(
      args: SelectSubset<T, SubscriptionUsageDeleteArgs<ExtArgs>>,
    ): Prisma__SubscriptionUsageClient<
      $Result.GetResult<
        Prisma.$SubscriptionUsagePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one SubscriptionUsage.
     * @param {SubscriptionUsageUpdateArgs} args - Arguments to update one SubscriptionUsage.
     * @example
     * // Update one SubscriptionUsage
     * const subscriptionUsage = await prisma.subscriptionUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SubscriptionUsageUpdateArgs>(
      args: SelectSubset<T, SubscriptionUsageUpdateArgs<ExtArgs>>,
    ): Prisma__SubscriptionUsageClient<
      $Result.GetResult<
        Prisma.$SubscriptionUsagePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more SubscriptionUsages.
     * @param {SubscriptionUsageDeleteManyArgs} args - Arguments to filter SubscriptionUsages to delete.
     * @example
     * // Delete a few SubscriptionUsages
     * const { count } = await prisma.subscriptionUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SubscriptionUsageDeleteManyArgs>(
      args?: SelectSubset<T, SubscriptionUsageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SubscriptionUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionUsages
     * const subscriptionUsage = await prisma.subscriptionUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SubscriptionUsageUpdateManyArgs>(
      args: SelectSubset<T, SubscriptionUsageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SubscriptionUsages and returns the data updated in the database.
     * @param {SubscriptionUsageUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionUsages.
     * @example
     * // Update many SubscriptionUsages
     * const subscriptionUsage = await prisma.subscriptionUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SubscriptionUsages and only return the `id`
     * const subscriptionUsageWithIdOnly = await prisma.subscriptionUsage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SubscriptionUsageUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SubscriptionUsageUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionUsagePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one SubscriptionUsage.
     * @param {SubscriptionUsageUpsertArgs} args - Arguments to update or create a SubscriptionUsage.
     * @example
     * // Update or create a SubscriptionUsage
     * const subscriptionUsage = await prisma.subscriptionUsage.upsert({
     *   create: {
     *     // ... data to create a SubscriptionUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionUsage we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUsageUpsertArgs>(
      args: SelectSubset<T, SubscriptionUsageUpsertArgs<ExtArgs>>,
    ): Prisma__SubscriptionUsageClient<
      $Result.GetResult<
        Prisma.$SubscriptionUsagePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of SubscriptionUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUsageCountArgs} args - Arguments to filter SubscriptionUsages to count.
     * @example
     * // Count the number of SubscriptionUsages
     * const count = await prisma.subscriptionUsage.count({
     *   where: {
     *     // ... the filter for the SubscriptionUsages we want to count
     *   }
     * })
     **/
    count<T extends SubscriptionUsageCountArgs>(
      args?: Subset<T, SubscriptionUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<
              T["select"],
              SubscriptionUsageCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a SubscriptionUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SubscriptionUsageAggregateArgs>(
      args: Subset<T, SubscriptionUsageAggregateArgs>,
    ): Prisma.PrismaPromise<GetSubscriptionUsageAggregateType<T>>;

    /**
     * Group by SubscriptionUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SubscriptionUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionUsageGroupByArgs["orderBy"] }
        : { orderBy?: SubscriptionUsageGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SubscriptionUsageGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetSubscriptionUsageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SubscriptionUsage model
     */
    readonly fields: SubscriptionUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionUsageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the SubscriptionUsage model
   */
  interface SubscriptionUsageFieldRefs {
    readonly id: FieldRef<"SubscriptionUsage", "String">;
    readonly userId: FieldRef<"SubscriptionUsage", "String">;
    readonly projectsCreated: FieldRef<"SubscriptionUsage", "Int">;
    readonly collaboratorsInvited: FieldRef<"SubscriptionUsage", "Int">;
    readonly aiSuggestionsUsed: FieldRef<"SubscriptionUsage", "Int">;
    readonly wordsProcessed: FieldRef<"SubscriptionUsage", "Int">;
    readonly lastResetDate: FieldRef<"SubscriptionUsage", "DateTime">;
    readonly createdAt: FieldRef<"SubscriptionUsage", "DateTime">;
    readonly updatedAt: FieldRef<"SubscriptionUsage", "DateTime">;
  }

  // Custom InputTypes
  /**
   * SubscriptionUsage findUnique
   */
  export type SubscriptionUsageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null;
    /**
     * Filter, which SubscriptionUsage to fetch.
     */
    where: SubscriptionUsageWhereUniqueInput;
  };

  /**
   * SubscriptionUsage findUniqueOrThrow
   */
  export type SubscriptionUsageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null;
    /**
     * Filter, which SubscriptionUsage to fetch.
     */
    where: SubscriptionUsageWhereUniqueInput;
  };

  /**
   * SubscriptionUsage findFirst
   */
  export type SubscriptionUsageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null;
    /**
     * Filter, which SubscriptionUsage to fetch.
     */
    where?: SubscriptionUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionUsages to fetch.
     */
    orderBy?:
      | SubscriptionUsageOrderByWithRelationInput
      | SubscriptionUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SubscriptionUsages.
     */
    cursor?: SubscriptionUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SubscriptionUsages.
     */
    distinct?:
      | SubscriptionUsageScalarFieldEnum
      | SubscriptionUsageScalarFieldEnum[];
  };

  /**
   * SubscriptionUsage findFirstOrThrow
   */
  export type SubscriptionUsageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null;
    /**
     * Filter, which SubscriptionUsage to fetch.
     */
    where?: SubscriptionUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionUsages to fetch.
     */
    orderBy?:
      | SubscriptionUsageOrderByWithRelationInput
      | SubscriptionUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SubscriptionUsages.
     */
    cursor?: SubscriptionUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SubscriptionUsages.
     */
    distinct?:
      | SubscriptionUsageScalarFieldEnum
      | SubscriptionUsageScalarFieldEnum[];
  };

  /**
   * SubscriptionUsage findMany
   */
  export type SubscriptionUsageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null;
    /**
     * Filter, which SubscriptionUsages to fetch.
     */
    where?: SubscriptionUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionUsages to fetch.
     */
    orderBy?:
      | SubscriptionUsageOrderByWithRelationInput
      | SubscriptionUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SubscriptionUsages.
     */
    cursor?: SubscriptionUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionUsages.
     */
    skip?: number;
    distinct?:
      | SubscriptionUsageScalarFieldEnum
      | SubscriptionUsageScalarFieldEnum[];
  };

  /**
   * SubscriptionUsage create
   */
  export type SubscriptionUsageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null;
    /**
     * The data needed to create a SubscriptionUsage.
     */
    data: XOR<
      SubscriptionUsageCreateInput,
      SubscriptionUsageUncheckedCreateInput
    >;
  };

  /**
   * SubscriptionUsage createMany
   */
  export type SubscriptionUsageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many SubscriptionUsages.
     */
    data: SubscriptionUsageCreateManyInput | SubscriptionUsageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * SubscriptionUsage createManyAndReturn
   */
  export type SubscriptionUsageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null;
    /**
     * The data used to create many SubscriptionUsages.
     */
    data: SubscriptionUsageCreateManyInput | SubscriptionUsageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * SubscriptionUsage update
   */
  export type SubscriptionUsageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null;
    /**
     * The data needed to update a SubscriptionUsage.
     */
    data: XOR<
      SubscriptionUsageUpdateInput,
      SubscriptionUsageUncheckedUpdateInput
    >;
    /**
     * Choose, which SubscriptionUsage to update.
     */
    where: SubscriptionUsageWhereUniqueInput;
  };

  /**
   * SubscriptionUsage updateMany
   */
  export type SubscriptionUsageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update SubscriptionUsages.
     */
    data: XOR<
      SubscriptionUsageUpdateManyMutationInput,
      SubscriptionUsageUncheckedUpdateManyInput
    >;
    /**
     * Filter which SubscriptionUsages to update
     */
    where?: SubscriptionUsageWhereInput;
    /**
     * Limit how many SubscriptionUsages to update.
     */
    limit?: number;
  };

  /**
   * SubscriptionUsage updateManyAndReturn
   */
  export type SubscriptionUsageUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null;
    /**
     * The data used to update SubscriptionUsages.
     */
    data: XOR<
      SubscriptionUsageUpdateManyMutationInput,
      SubscriptionUsageUncheckedUpdateManyInput
    >;
    /**
     * Filter which SubscriptionUsages to update
     */
    where?: SubscriptionUsageWhereInput;
    /**
     * Limit how many SubscriptionUsages to update.
     */
    limit?: number;
  };

  /**
   * SubscriptionUsage upsert
   */
  export type SubscriptionUsageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null;
    /**
     * The filter to search for the SubscriptionUsage to update in case it exists.
     */
    where: SubscriptionUsageWhereUniqueInput;
    /**
     * In case the SubscriptionUsage found by the `where` argument doesn't exist, create a new SubscriptionUsage with this data.
     */
    create: XOR<
      SubscriptionUsageCreateInput,
      SubscriptionUsageUncheckedCreateInput
    >;
    /**
     * In case the SubscriptionUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      SubscriptionUsageUpdateInput,
      SubscriptionUsageUncheckedUpdateInput
    >;
  };

  /**
   * SubscriptionUsage delete
   */
  export type SubscriptionUsageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null;
    /**
     * Filter which SubscriptionUsage to delete.
     */
    where: SubscriptionUsageWhereUniqueInput;
  };

  /**
   * SubscriptionUsage deleteMany
   */
  export type SubscriptionUsageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SubscriptionUsages to delete
     */
    where?: SubscriptionUsageWhereInput;
    /**
     * Limit how many SubscriptionUsages to delete.
     */
    limit?: number;
  };

  /**
   * SubscriptionUsage without action
   */
  export type SubscriptionUsageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    name: "name";
    email: "email";
    emailVerified: "emailVerified";
    image: "image";
    hashedPassword: "hashedPassword";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    stripeCustomerId: "stripeCustomerId";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const AccountScalarFieldEnum: {
    id: "id";
    userId: "userId";
    type: "type";
    provider: "provider";
    providerAccountId: "providerAccountId";
    refresh_token: "refresh_token";
    access_token: "access_token";
    expires_at: "expires_at";
    token_type: "token_type";
    scope: "scope";
    id_token: "id_token";
    session_state: "session_state";
  };

  export type AccountScalarFieldEnum =
    (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];

  export const SessionScalarFieldEnum: {
    id: "id";
    sessionToken: "sessionToken";
    userId: "userId";
    expires: "expires";
  };

  export type SessionScalarFieldEnum =
    (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];

  export const VerificationTokenScalarFieldEnum: {
    identifier: "identifier";
    token: "token";
    expires: "expires";
  };

  export type VerificationTokenScalarFieldEnum =
    (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum];

  export const ProjectScalarFieldEnum: {
    id: "id";
    title: "title";
    description: "description";
    content: "content";
    userId: "userId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    isPublic: "isPublic";
  };

  export type ProjectScalarFieldEnum =
    (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];

  export const UserPreferenceScalarFieldEnum: {
    id: "id";
    userId: "userId";
    theme: "theme";
    emailNotifications: "emailNotifications";
    aiSuggestions: "aiSuggestions";
    autoSave: "autoSave";
    fontSize: "fontSize";
    editorFontFamily: "editorFontFamily";
  };

  export type UserPreferenceScalarFieldEnum =
    (typeof UserPreferenceScalarFieldEnum)[keyof typeof UserPreferenceScalarFieldEnum];

  export const ApiUsageScalarFieldEnum: {
    id: "id";
    userId: "userId";
    totalTokensUsed: "totalTokensUsed";
    monthlyTokensUsed: "monthlyTokensUsed";
    lastResetDate: "lastResetDate";
  };

  export type ApiUsageScalarFieldEnum =
    (typeof ApiUsageScalarFieldEnum)[keyof typeof ApiUsageScalarFieldEnum];

  export const SharedProjectScalarFieldEnum: {
    id: "id";
    projectId: "projectId";
    userId: "userId";
    permissions: "permissions";
    createdAt: "createdAt";
  };

  export type SharedProjectScalarFieldEnum =
    (typeof SharedProjectScalarFieldEnum)[keyof typeof SharedProjectScalarFieldEnum];

  export const ProjectInvitationScalarFieldEnum: {
    id: "id";
    projectId: "projectId";
    email: "email";
    userId: "userId";
    token: "token";
    expires: "expires";
    createdAt: "createdAt";
  };

  export type ProjectInvitationScalarFieldEnum =
    (typeof ProjectInvitationScalarFieldEnum)[keyof typeof ProjectInvitationScalarFieldEnum];

  export const ExportHistoryScalarFieldEnum: {
    id: "id";
    projectId: "projectId";
    format: "format";
    createdAt: "createdAt";
    fileUrl: "fileUrl";
  };

  export type ExportHistoryScalarFieldEnum =
    (typeof ExportHistoryScalarFieldEnum)[keyof typeof ExportHistoryScalarFieldEnum];

  export const WritingAnalyticsScalarFieldEnum: {
    id: "id";
    projectId: "projectId";
    wordCount: "wordCount";
    characterCount: "characterCount";
    sentenceCount: "sentenceCount";
    paragraphCount: "paragraphCount";
    readabilityScore: "readabilityScore";
    topicAnalysis: "topicAnalysis";
    lastUpdated: "lastUpdated";
  };

  export type WritingAnalyticsScalarFieldEnum =
    (typeof WritingAnalyticsScalarFieldEnum)[keyof typeof WritingAnalyticsScalarFieldEnum];

  export const AiInteractionScalarFieldEnum: {
    id: "id";
    projectId: "projectId";
    prompt: "prompt";
    response: "response";
    tokensUsed: "tokensUsed";
    createdAt: "createdAt";
    interactionType: "interactionType";
  };

  export type AiInteractionScalarFieldEnum =
    (typeof AiInteractionScalarFieldEnum)[keyof typeof AiInteractionScalarFieldEnum];

  export const SubscriptionScalarFieldEnum: {
    id: "id";
    userId: "userId";
    stripeSubscriptionId: "stripeSubscriptionId";
    stripePriceId: "stripePriceId";
    stripeCurrentPeriodEnd: "stripeCurrentPeriodEnd";
    stripeCustomerId: "stripeCustomerId";
    planId: "planId";
    status: "status";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type SubscriptionScalarFieldEnum =
    (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum];

  export const SubscriptionUsageScalarFieldEnum: {
    id: "id";
    userId: "userId";
    projectsCreated: "projectsCreated";
    collaboratorsInvited: "collaboratorsInvited";
    aiSuggestionsUsed: "aiSuggestionsUsed";
    wordsProcessed: "wordsProcessed";
    lastResetDate: "lastResetDate";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type SubscriptionUsageScalarFieldEnum =
    (typeof SubscriptionUsageScalarFieldEnum)[keyof typeof SubscriptionUsageScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
  };

  export type NullableJsonNullValueInput =
    (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Json"
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "QueryMode"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    name?: StringNullableFilter<"User"> | string | null;
    email?: StringFilter<"User"> | string;
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null;
    image?: StringNullableFilter<"User"> | string | null;
    hashedPassword?: StringNullableFilter<"User"> | string | null;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    updatedAt?: DateTimeFilter<"User"> | Date | string;
    stripeCustomerId?: StringNullableFilter<"User"> | string | null;
    projects?: ProjectListRelationFilter;
    accounts?: AccountListRelationFilter;
    sessions?: SessionListRelationFilter;
    preferences?: XOR<
      UserPreferenceNullableScalarRelationFilter,
      UserPreferenceWhereInput
    > | null;
    apiUsage?: XOR<
      ApiUsageNullableScalarRelationFilter,
      ApiUsageWhereInput
    > | null;
    sharedProjects?: SharedProjectListRelationFilter;
    projectInvitations?: ProjectInvitationListRelationFilter;
    subscription?: XOR<
      SubscriptionNullableScalarRelationFilter,
      SubscriptionWhereInput
    > | null;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    hashedPassword?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    stripeCustomerId?: SortOrderInput | SortOrder;
    projects?: ProjectOrderByRelationAggregateInput;
    accounts?: AccountOrderByRelationAggregateInput;
    sessions?: SessionOrderByRelationAggregateInput;
    preferences?: UserPreferenceOrderByWithRelationInput;
    apiUsage?: ApiUsageOrderByWithRelationInput;
    sharedProjects?: SharedProjectOrderByRelationAggregateInput;
    projectInvitations?: ProjectInvitationOrderByRelationAggregateInput;
    subscription?: SubscriptionOrderByWithRelationInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      stripeCustomerId?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringNullableFilter<"User"> | string | null;
      emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null;
      image?: StringNullableFilter<"User"> | string | null;
      hashedPassword?: StringNullableFilter<"User"> | string | null;
      createdAt?: DateTimeFilter<"User"> | Date | string;
      updatedAt?: DateTimeFilter<"User"> | Date | string;
      projects?: ProjectListRelationFilter;
      accounts?: AccountListRelationFilter;
      sessions?: SessionListRelationFilter;
      preferences?: XOR<
        UserPreferenceNullableScalarRelationFilter,
        UserPreferenceWhereInput
      > | null;
      apiUsage?: XOR<
        ApiUsageNullableScalarRelationFilter,
        ApiUsageWhereInput
      > | null;
      sharedProjects?: SharedProjectListRelationFilter;
      projectInvitations?: ProjectInvitationListRelationFilter;
      subscription?: XOR<
        SubscriptionNullableScalarRelationFilter,
        SubscriptionWhereInput
      > | null;
    },
    "id" | "email" | "stripeCustomerId"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    hashedPassword?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    stripeCustomerId?: SortOrderInput | SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"User"> | string;
    name?: StringNullableWithAggregatesFilter<"User"> | string | null;
    email?: StringWithAggregatesFilter<"User"> | string;
    emailVerified?:
      | DateTimeNullableWithAggregatesFilter<"User">
      | Date
      | string
      | null;
    image?: StringNullableWithAggregatesFilter<"User"> | string | null;
    hashedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    stripeCustomerId?:
      | StringNullableWithAggregatesFilter<"User">
      | string
      | null;
  };

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[];
    OR?: AccountWhereInput[];
    NOT?: AccountWhereInput | AccountWhereInput[];
    id?: StringFilter<"Account"> | string;
    userId?: StringFilter<"Account"> | string;
    type?: StringFilter<"Account"> | string;
    provider?: StringFilter<"Account"> | string;
    providerAccountId?: StringFilter<"Account"> | string;
    refresh_token?: StringNullableFilter<"Account"> | string | null;
    access_token?: StringNullableFilter<"Account"> | string | null;
    expires_at?: IntNullableFilter<"Account"> | number | null;
    token_type?: StringNullableFilter<"Account"> | string | null;
    scope?: StringNullableFilter<"Account"> | string | null;
    id_token?: StringNullableFilter<"Account"> | string | null;
    session_state?: StringNullableFilter<"Account"> | string | null;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    refresh_token?: SortOrderInput | SortOrder;
    access_token?: SortOrderInput | SortOrder;
    expires_at?: SortOrderInput | SortOrder;
    token_type?: SortOrderInput | SortOrder;
    scope?: SortOrderInput | SortOrder;
    id_token?: SortOrderInput | SortOrder;
    session_state?: SortOrderInput | SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type AccountWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput;
      AND?: AccountWhereInput | AccountWhereInput[];
      OR?: AccountWhereInput[];
      NOT?: AccountWhereInput | AccountWhereInput[];
      userId?: StringFilter<"Account"> | string;
      type?: StringFilter<"Account"> | string;
      provider?: StringFilter<"Account"> | string;
      providerAccountId?: StringFilter<"Account"> | string;
      refresh_token?: StringNullableFilter<"Account"> | string | null;
      access_token?: StringNullableFilter<"Account"> | string | null;
      expires_at?: IntNullableFilter<"Account"> | number | null;
      token_type?: StringNullableFilter<"Account"> | string | null;
      scope?: StringNullableFilter<"Account"> | string | null;
      id_token?: StringNullableFilter<"Account"> | string | null;
      session_state?: StringNullableFilter<"Account"> | string | null;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "provider_providerAccountId"
  >;

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    refresh_token?: SortOrderInput | SortOrder;
    access_token?: SortOrderInput | SortOrder;
    expires_at?: SortOrderInput | SortOrder;
    token_type?: SortOrderInput | SortOrder;
    scope?: SortOrderInput | SortOrder;
    id_token?: SortOrderInput | SortOrder;
    session_state?: SortOrderInput | SortOrder;
    _count?: AccountCountOrderByAggregateInput;
    _avg?: AccountAvgOrderByAggregateInput;
    _max?: AccountMaxOrderByAggregateInput;
    _min?: AccountMinOrderByAggregateInput;
    _sum?: AccountSumOrderByAggregateInput;
  };

  export type AccountScalarWhereWithAggregatesInput = {
    AND?:
      | AccountScalarWhereWithAggregatesInput
      | AccountScalarWhereWithAggregatesInput[];
    OR?: AccountScalarWhereWithAggregatesInput[];
    NOT?:
      | AccountScalarWhereWithAggregatesInput
      | AccountScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Account"> | string;
    userId?: StringWithAggregatesFilter<"Account"> | string;
    type?: StringWithAggregatesFilter<"Account"> | string;
    provider?: StringWithAggregatesFilter<"Account"> | string;
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string;
    refresh_token?:
      | StringNullableWithAggregatesFilter<"Account">
      | string
      | null;
    access_token?:
      | StringNullableWithAggregatesFilter<"Account">
      | string
      | null;
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null;
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null;
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null;
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null;
    session_state?:
      | StringNullableWithAggregatesFilter<"Account">
      | string
      | null;
  };

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[];
    OR?: SessionWhereInput[];
    NOT?: SessionWhereInput | SessionWhereInput[];
    id?: StringFilter<"Session"> | string;
    sessionToken?: StringFilter<"Session"> | string;
    userId?: StringFilter<"Session"> | string;
    expires?: DateTimeFilter<"Session"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder;
    sessionToken?: SortOrder;
    userId?: SortOrder;
    expires?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type SessionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      sessionToken?: string;
      AND?: SessionWhereInput | SessionWhereInput[];
      OR?: SessionWhereInput[];
      NOT?: SessionWhereInput | SessionWhereInput[];
      userId?: StringFilter<"Session"> | string;
      expires?: DateTimeFilter<"Session"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "sessionToken"
  >;

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder;
    sessionToken?: SortOrder;
    userId?: SortOrder;
    expires?: SortOrder;
    _count?: SessionCountOrderByAggregateInput;
    _max?: SessionMaxOrderByAggregateInput;
    _min?: SessionMinOrderByAggregateInput;
  };

  export type SessionScalarWhereWithAggregatesInput = {
    AND?:
      | SessionScalarWhereWithAggregatesInput
      | SessionScalarWhereWithAggregatesInput[];
    OR?: SessionScalarWhereWithAggregatesInput[];
    NOT?:
      | SessionScalarWhereWithAggregatesInput
      | SessionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Session"> | string;
    sessionToken?: StringWithAggregatesFilter<"Session"> | string;
    userId?: StringWithAggregatesFilter<"Session"> | string;
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string;
  };

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[];
    OR?: VerificationTokenWhereInput[];
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[];
    identifier?: StringFilter<"VerificationToken"> | string;
    token?: StringFilter<"VerificationToken"> | string;
    expires?: DateTimeFilter<"VerificationToken"> | Date | string;
  };

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder;
    token?: SortOrder;
    expires?: SortOrder;
  };

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<
    {
      token?: string;
      identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput;
      AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[];
      OR?: VerificationTokenWhereInput[];
      NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[];
      identifier?: StringFilter<"VerificationToken"> | string;
      expires?: DateTimeFilter<"VerificationToken"> | Date | string;
    },
    "token" | "identifier_token"
  >;

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder;
    token?: SortOrder;
    expires?: SortOrder;
    _count?: VerificationTokenCountOrderByAggregateInput;
    _max?: VerificationTokenMaxOrderByAggregateInput;
    _min?: VerificationTokenMinOrderByAggregateInput;
  };

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?:
      | VerificationTokenScalarWhereWithAggregatesInput
      | VerificationTokenScalarWhereWithAggregatesInput[];
    OR?: VerificationTokenScalarWhereWithAggregatesInput[];
    NOT?:
      | VerificationTokenScalarWhereWithAggregatesInput
      | VerificationTokenScalarWhereWithAggregatesInput[];
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string;
    token?: StringWithAggregatesFilter<"VerificationToken"> | string;
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string;
  };

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[];
    OR?: ProjectWhereInput[];
    NOT?: ProjectWhereInput | ProjectWhereInput[];
    id?: StringFilter<"Project"> | string;
    title?: StringFilter<"Project"> | string;
    description?: StringNullableFilter<"Project"> | string | null;
    content?: StringNullableFilter<"Project"> | string | null;
    userId?: StringFilter<"Project"> | string;
    createdAt?: DateTimeFilter<"Project"> | Date | string;
    updatedAt?: DateTimeFilter<"Project"> | Date | string;
    isPublic?: BoolFilter<"Project"> | boolean;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    sharedWith?: SharedProjectListRelationFilter;
    invitations?: ProjectInvitationListRelationFilter;
    exportHistory?: ExportHistoryListRelationFilter;
    writingAnalytics?: XOR<
      WritingAnalyticsNullableScalarRelationFilter,
      WritingAnalyticsWhereInput
    > | null;
    aiInteractions?: AiInteractionListRelationFilter;
  };

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    content?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    isPublic?: SortOrder;
    user?: UserOrderByWithRelationInput;
    sharedWith?: SharedProjectOrderByRelationAggregateInput;
    invitations?: ProjectInvitationOrderByRelationAggregateInput;
    exportHistory?: ExportHistoryOrderByRelationAggregateInput;
    writingAnalytics?: WritingAnalyticsOrderByWithRelationInput;
    aiInteractions?: AiInteractionOrderByRelationAggregateInput;
  };

  export type ProjectWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ProjectWhereInput | ProjectWhereInput[];
      OR?: ProjectWhereInput[];
      NOT?: ProjectWhereInput | ProjectWhereInput[];
      title?: StringFilter<"Project"> | string;
      description?: StringNullableFilter<"Project"> | string | null;
      content?: StringNullableFilter<"Project"> | string | null;
      userId?: StringFilter<"Project"> | string;
      createdAt?: DateTimeFilter<"Project"> | Date | string;
      updatedAt?: DateTimeFilter<"Project"> | Date | string;
      isPublic?: BoolFilter<"Project"> | boolean;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      sharedWith?: SharedProjectListRelationFilter;
      invitations?: ProjectInvitationListRelationFilter;
      exportHistory?: ExportHistoryListRelationFilter;
      writingAnalytics?: XOR<
        WritingAnalyticsNullableScalarRelationFilter,
        WritingAnalyticsWhereInput
      > | null;
      aiInteractions?: AiInteractionListRelationFilter;
    },
    "id"
  >;

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    content?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    isPublic?: SortOrder;
    _count?: ProjectCountOrderByAggregateInput;
    _max?: ProjectMaxOrderByAggregateInput;
    _min?: ProjectMinOrderByAggregateInput;
  };

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?:
      | ProjectScalarWhereWithAggregatesInput
      | ProjectScalarWhereWithAggregatesInput[];
    OR?: ProjectScalarWhereWithAggregatesInput[];
    NOT?:
      | ProjectScalarWhereWithAggregatesInput
      | ProjectScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Project"> | string;
    title?: StringWithAggregatesFilter<"Project"> | string;
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null;
    content?: StringNullableWithAggregatesFilter<"Project"> | string | null;
    userId?: StringWithAggregatesFilter<"Project"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string;
    isPublic?: BoolWithAggregatesFilter<"Project"> | boolean;
  };

  export type UserPreferenceWhereInput = {
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[];
    OR?: UserPreferenceWhereInput[];
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[];
    id?: StringFilter<"UserPreference"> | string;
    userId?: StringFilter<"UserPreference"> | string;
    theme?: StringFilter<"UserPreference"> | string;
    emailNotifications?: BoolFilter<"UserPreference"> | boolean;
    aiSuggestions?: BoolFilter<"UserPreference"> | boolean;
    autoSave?: BoolFilter<"UserPreference"> | boolean;
    fontSize?: IntFilter<"UserPreference"> | number;
    editorFontFamily?: StringFilter<"UserPreference"> | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type UserPreferenceOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    theme?: SortOrder;
    emailNotifications?: SortOrder;
    aiSuggestions?: SortOrder;
    autoSave?: SortOrder;
    fontSize?: SortOrder;
    editorFontFamily?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type UserPreferenceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[];
      OR?: UserPreferenceWhereInput[];
      NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[];
      theme?: StringFilter<"UserPreference"> | string;
      emailNotifications?: BoolFilter<"UserPreference"> | boolean;
      aiSuggestions?: BoolFilter<"UserPreference"> | boolean;
      autoSave?: BoolFilter<"UserPreference"> | boolean;
      fontSize?: IntFilter<"UserPreference"> | number;
      editorFontFamily?: StringFilter<"UserPreference"> | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "userId"
  >;

  export type UserPreferenceOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    theme?: SortOrder;
    emailNotifications?: SortOrder;
    aiSuggestions?: SortOrder;
    autoSave?: SortOrder;
    fontSize?: SortOrder;
    editorFontFamily?: SortOrder;
    _count?: UserPreferenceCountOrderByAggregateInput;
    _avg?: UserPreferenceAvgOrderByAggregateInput;
    _max?: UserPreferenceMaxOrderByAggregateInput;
    _min?: UserPreferenceMinOrderByAggregateInput;
    _sum?: UserPreferenceSumOrderByAggregateInput;
  };

  export type UserPreferenceScalarWhereWithAggregatesInput = {
    AND?:
      | UserPreferenceScalarWhereWithAggregatesInput
      | UserPreferenceScalarWhereWithAggregatesInput[];
    OR?: UserPreferenceScalarWhereWithAggregatesInput[];
    NOT?:
      | UserPreferenceScalarWhereWithAggregatesInput
      | UserPreferenceScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"UserPreference"> | string;
    userId?: StringWithAggregatesFilter<"UserPreference"> | string;
    theme?: StringWithAggregatesFilter<"UserPreference"> | string;
    emailNotifications?: BoolWithAggregatesFilter<"UserPreference"> | boolean;
    aiSuggestions?: BoolWithAggregatesFilter<"UserPreference"> | boolean;
    autoSave?: BoolWithAggregatesFilter<"UserPreference"> | boolean;
    fontSize?: IntWithAggregatesFilter<"UserPreference"> | number;
    editorFontFamily?: StringWithAggregatesFilter<"UserPreference"> | string;
  };

  export type ApiUsageWhereInput = {
    AND?: ApiUsageWhereInput | ApiUsageWhereInput[];
    OR?: ApiUsageWhereInput[];
    NOT?: ApiUsageWhereInput | ApiUsageWhereInput[];
    id?: StringFilter<"ApiUsage"> | string;
    userId?: StringFilter<"ApiUsage"> | string;
    totalTokensUsed?: IntFilter<"ApiUsage"> | number;
    monthlyTokensUsed?: IntFilter<"ApiUsage"> | number;
    lastResetDate?: DateTimeFilter<"ApiUsage"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type ApiUsageOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    totalTokensUsed?: SortOrder;
    monthlyTokensUsed?: SortOrder;
    lastResetDate?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type ApiUsageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      AND?: ApiUsageWhereInput | ApiUsageWhereInput[];
      OR?: ApiUsageWhereInput[];
      NOT?: ApiUsageWhereInput | ApiUsageWhereInput[];
      totalTokensUsed?: IntFilter<"ApiUsage"> | number;
      monthlyTokensUsed?: IntFilter<"ApiUsage"> | number;
      lastResetDate?: DateTimeFilter<"ApiUsage"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "userId"
  >;

  export type ApiUsageOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    totalTokensUsed?: SortOrder;
    monthlyTokensUsed?: SortOrder;
    lastResetDate?: SortOrder;
    _count?: ApiUsageCountOrderByAggregateInput;
    _avg?: ApiUsageAvgOrderByAggregateInput;
    _max?: ApiUsageMaxOrderByAggregateInput;
    _min?: ApiUsageMinOrderByAggregateInput;
    _sum?: ApiUsageSumOrderByAggregateInput;
  };

  export type ApiUsageScalarWhereWithAggregatesInput = {
    AND?:
      | ApiUsageScalarWhereWithAggregatesInput
      | ApiUsageScalarWhereWithAggregatesInput[];
    OR?: ApiUsageScalarWhereWithAggregatesInput[];
    NOT?:
      | ApiUsageScalarWhereWithAggregatesInput
      | ApiUsageScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"ApiUsage"> | string;
    userId?: StringWithAggregatesFilter<"ApiUsage"> | string;
    totalTokensUsed?: IntWithAggregatesFilter<"ApiUsage"> | number;
    monthlyTokensUsed?: IntWithAggregatesFilter<"ApiUsage"> | number;
    lastResetDate?: DateTimeWithAggregatesFilter<"ApiUsage"> | Date | string;
  };

  export type SharedProjectWhereInput = {
    AND?: SharedProjectWhereInput | SharedProjectWhereInput[];
    OR?: SharedProjectWhereInput[];
    NOT?: SharedProjectWhereInput | SharedProjectWhereInput[];
    id?: StringFilter<"SharedProject"> | string;
    projectId?: StringFilter<"SharedProject"> | string;
    userId?: StringFilter<"SharedProject"> | string;
    permissions?: StringFilter<"SharedProject"> | string;
    createdAt?: DateTimeFilter<"SharedProject"> | Date | string;
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type SharedProjectOrderByWithRelationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    userId?: SortOrder;
    permissions?: SortOrder;
    createdAt?: SortOrder;
    project?: ProjectOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type SharedProjectWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      projectId_userId?: SharedProjectProjectIdUserIdCompoundUniqueInput;
      AND?: SharedProjectWhereInput | SharedProjectWhereInput[];
      OR?: SharedProjectWhereInput[];
      NOT?: SharedProjectWhereInput | SharedProjectWhereInput[];
      projectId?: StringFilter<"SharedProject"> | string;
      userId?: StringFilter<"SharedProject"> | string;
      permissions?: StringFilter<"SharedProject"> | string;
      createdAt?: DateTimeFilter<"SharedProject"> | Date | string;
      project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "projectId_userId"
  >;

  export type SharedProjectOrderByWithAggregationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    userId?: SortOrder;
    permissions?: SortOrder;
    createdAt?: SortOrder;
    _count?: SharedProjectCountOrderByAggregateInput;
    _max?: SharedProjectMaxOrderByAggregateInput;
    _min?: SharedProjectMinOrderByAggregateInput;
  };

  export type SharedProjectScalarWhereWithAggregatesInput = {
    AND?:
      | SharedProjectScalarWhereWithAggregatesInput
      | SharedProjectScalarWhereWithAggregatesInput[];
    OR?: SharedProjectScalarWhereWithAggregatesInput[];
    NOT?:
      | SharedProjectScalarWhereWithAggregatesInput
      | SharedProjectScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"SharedProject"> | string;
    projectId?: StringWithAggregatesFilter<"SharedProject"> | string;
    userId?: StringWithAggregatesFilter<"SharedProject"> | string;
    permissions?: StringWithAggregatesFilter<"SharedProject"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"SharedProject"> | Date | string;
  };

  export type ProjectInvitationWhereInput = {
    AND?: ProjectInvitationWhereInput | ProjectInvitationWhereInput[];
    OR?: ProjectInvitationWhereInput[];
    NOT?: ProjectInvitationWhereInput | ProjectInvitationWhereInput[];
    id?: StringFilter<"ProjectInvitation"> | string;
    projectId?: StringFilter<"ProjectInvitation"> | string;
    email?: StringFilter<"ProjectInvitation"> | string;
    userId?: StringNullableFilter<"ProjectInvitation"> | string | null;
    token?: StringFilter<"ProjectInvitation"> | string;
    expires?: DateTimeFilter<"ProjectInvitation"> | Date | string;
    createdAt?: DateTimeFilter<"ProjectInvitation"> | Date | string;
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
  };

  export type ProjectInvitationOrderByWithRelationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    email?: SortOrder;
    userId?: SortOrderInput | SortOrder;
    token?: SortOrder;
    expires?: SortOrder;
    createdAt?: SortOrder;
    project?: ProjectOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type ProjectInvitationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      token?: string;
      projectId_email?: ProjectInvitationProjectIdEmailCompoundUniqueInput;
      AND?: ProjectInvitationWhereInput | ProjectInvitationWhereInput[];
      OR?: ProjectInvitationWhereInput[];
      NOT?: ProjectInvitationWhereInput | ProjectInvitationWhereInput[];
      projectId?: StringFilter<"ProjectInvitation"> | string;
      email?: StringFilter<"ProjectInvitation"> | string;
      userId?: StringNullableFilter<"ProjectInvitation"> | string | null;
      expires?: DateTimeFilter<"ProjectInvitation"> | Date | string;
      createdAt?: DateTimeFilter<"ProjectInvitation"> | Date | string;
      project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
      user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
    },
    "id" | "token" | "projectId_email"
  >;

  export type ProjectInvitationOrderByWithAggregationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    email?: SortOrder;
    userId?: SortOrderInput | SortOrder;
    token?: SortOrder;
    expires?: SortOrder;
    createdAt?: SortOrder;
    _count?: ProjectInvitationCountOrderByAggregateInput;
    _max?: ProjectInvitationMaxOrderByAggregateInput;
    _min?: ProjectInvitationMinOrderByAggregateInput;
  };

  export type ProjectInvitationScalarWhereWithAggregatesInput = {
    AND?:
      | ProjectInvitationScalarWhereWithAggregatesInput
      | ProjectInvitationScalarWhereWithAggregatesInput[];
    OR?: ProjectInvitationScalarWhereWithAggregatesInput[];
    NOT?:
      | ProjectInvitationScalarWhereWithAggregatesInput
      | ProjectInvitationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"ProjectInvitation"> | string;
    projectId?: StringWithAggregatesFilter<"ProjectInvitation"> | string;
    email?: StringWithAggregatesFilter<"ProjectInvitation"> | string;
    userId?:
      | StringNullableWithAggregatesFilter<"ProjectInvitation">
      | string
      | null;
    token?: StringWithAggregatesFilter<"ProjectInvitation"> | string;
    expires?: DateTimeWithAggregatesFilter<"ProjectInvitation"> | Date | string;
    createdAt?:
      | DateTimeWithAggregatesFilter<"ProjectInvitation">
      | Date
      | string;
  };

  export type ExportHistoryWhereInput = {
    AND?: ExportHistoryWhereInput | ExportHistoryWhereInput[];
    OR?: ExportHistoryWhereInput[];
    NOT?: ExportHistoryWhereInput | ExportHistoryWhereInput[];
    id?: StringFilter<"ExportHistory"> | string;
    projectId?: StringFilter<"ExportHistory"> | string;
    format?: StringFilter<"ExportHistory"> | string;
    createdAt?: DateTimeFilter<"ExportHistory"> | Date | string;
    fileUrl?: StringNullableFilter<"ExportHistory"> | string | null;
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
  };

  export type ExportHistoryOrderByWithRelationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    format?: SortOrder;
    createdAt?: SortOrder;
    fileUrl?: SortOrderInput | SortOrder;
    project?: ProjectOrderByWithRelationInput;
  };

  export type ExportHistoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ExportHistoryWhereInput | ExportHistoryWhereInput[];
      OR?: ExportHistoryWhereInput[];
      NOT?: ExportHistoryWhereInput | ExportHistoryWhereInput[];
      projectId?: StringFilter<"ExportHistory"> | string;
      format?: StringFilter<"ExportHistory"> | string;
      createdAt?: DateTimeFilter<"ExportHistory"> | Date | string;
      fileUrl?: StringNullableFilter<"ExportHistory"> | string | null;
      project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
    },
    "id"
  >;

  export type ExportHistoryOrderByWithAggregationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    format?: SortOrder;
    createdAt?: SortOrder;
    fileUrl?: SortOrderInput | SortOrder;
    _count?: ExportHistoryCountOrderByAggregateInput;
    _max?: ExportHistoryMaxOrderByAggregateInput;
    _min?: ExportHistoryMinOrderByAggregateInput;
  };

  export type ExportHistoryScalarWhereWithAggregatesInput = {
    AND?:
      | ExportHistoryScalarWhereWithAggregatesInput
      | ExportHistoryScalarWhereWithAggregatesInput[];
    OR?: ExportHistoryScalarWhereWithAggregatesInput[];
    NOT?:
      | ExportHistoryScalarWhereWithAggregatesInput
      | ExportHistoryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"ExportHistory"> | string;
    projectId?: StringWithAggregatesFilter<"ExportHistory"> | string;
    format?: StringWithAggregatesFilter<"ExportHistory"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"ExportHistory"> | Date | string;
    fileUrl?:
      | StringNullableWithAggregatesFilter<"ExportHistory">
      | string
      | null;
  };

  export type WritingAnalyticsWhereInput = {
    AND?: WritingAnalyticsWhereInput | WritingAnalyticsWhereInput[];
    OR?: WritingAnalyticsWhereInput[];
    NOT?: WritingAnalyticsWhereInput | WritingAnalyticsWhereInput[];
    id?: StringFilter<"WritingAnalytics"> | string;
    projectId?: StringFilter<"WritingAnalytics"> | string;
    wordCount?: IntFilter<"WritingAnalytics"> | number;
    characterCount?: IntFilter<"WritingAnalytics"> | number;
    sentenceCount?: IntFilter<"WritingAnalytics"> | number;
    paragraphCount?: IntFilter<"WritingAnalytics"> | number;
    readabilityScore?: FloatNullableFilter<"WritingAnalytics"> | number | null;
    topicAnalysis?: JsonNullableFilter<"WritingAnalytics">;
    lastUpdated?: DateTimeFilter<"WritingAnalytics"> | Date | string;
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
  };

  export type WritingAnalyticsOrderByWithRelationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    wordCount?: SortOrder;
    characterCount?: SortOrder;
    sentenceCount?: SortOrder;
    paragraphCount?: SortOrder;
    readabilityScore?: SortOrderInput | SortOrder;
    topicAnalysis?: SortOrderInput | SortOrder;
    lastUpdated?: SortOrder;
    project?: ProjectOrderByWithRelationInput;
  };

  export type WritingAnalyticsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      projectId?: string;
      AND?: WritingAnalyticsWhereInput | WritingAnalyticsWhereInput[];
      OR?: WritingAnalyticsWhereInput[];
      NOT?: WritingAnalyticsWhereInput | WritingAnalyticsWhereInput[];
      wordCount?: IntFilter<"WritingAnalytics"> | number;
      characterCount?: IntFilter<"WritingAnalytics"> | number;
      sentenceCount?: IntFilter<"WritingAnalytics"> | number;
      paragraphCount?: IntFilter<"WritingAnalytics"> | number;
      readabilityScore?:
        | FloatNullableFilter<"WritingAnalytics">
        | number
        | null;
      topicAnalysis?: JsonNullableFilter<"WritingAnalytics">;
      lastUpdated?: DateTimeFilter<"WritingAnalytics"> | Date | string;
      project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
    },
    "id" | "projectId"
  >;

  export type WritingAnalyticsOrderByWithAggregationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    wordCount?: SortOrder;
    characterCount?: SortOrder;
    sentenceCount?: SortOrder;
    paragraphCount?: SortOrder;
    readabilityScore?: SortOrderInput | SortOrder;
    topicAnalysis?: SortOrderInput | SortOrder;
    lastUpdated?: SortOrder;
    _count?: WritingAnalyticsCountOrderByAggregateInput;
    _avg?: WritingAnalyticsAvgOrderByAggregateInput;
    _max?: WritingAnalyticsMaxOrderByAggregateInput;
    _min?: WritingAnalyticsMinOrderByAggregateInput;
    _sum?: WritingAnalyticsSumOrderByAggregateInput;
  };

  export type WritingAnalyticsScalarWhereWithAggregatesInput = {
    AND?:
      | WritingAnalyticsScalarWhereWithAggregatesInput
      | WritingAnalyticsScalarWhereWithAggregatesInput[];
    OR?: WritingAnalyticsScalarWhereWithAggregatesInput[];
    NOT?:
      | WritingAnalyticsScalarWhereWithAggregatesInput
      | WritingAnalyticsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"WritingAnalytics"> | string;
    projectId?: StringWithAggregatesFilter<"WritingAnalytics"> | string;
    wordCount?: IntWithAggregatesFilter<"WritingAnalytics"> | number;
    characterCount?: IntWithAggregatesFilter<"WritingAnalytics"> | number;
    sentenceCount?: IntWithAggregatesFilter<"WritingAnalytics"> | number;
    paragraphCount?: IntWithAggregatesFilter<"WritingAnalytics"> | number;
    readabilityScore?:
      | FloatNullableWithAggregatesFilter<"WritingAnalytics">
      | number
      | null;
    topicAnalysis?: JsonNullableWithAggregatesFilter<"WritingAnalytics">;
    lastUpdated?:
      | DateTimeWithAggregatesFilter<"WritingAnalytics">
      | Date
      | string;
  };

  export type AiInteractionWhereInput = {
    AND?: AiInteractionWhereInput | AiInteractionWhereInput[];
    OR?: AiInteractionWhereInput[];
    NOT?: AiInteractionWhereInput | AiInteractionWhereInput[];
    id?: StringFilter<"AiInteraction"> | string;
    projectId?: StringFilter<"AiInteraction"> | string;
    prompt?: StringFilter<"AiInteraction"> | string;
    response?: StringFilter<"AiInteraction"> | string;
    tokensUsed?: IntFilter<"AiInteraction"> | number;
    createdAt?: DateTimeFilter<"AiInteraction"> | Date | string;
    interactionType?: StringFilter<"AiInteraction"> | string;
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
  };

  export type AiInteractionOrderByWithRelationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    prompt?: SortOrder;
    response?: SortOrder;
    tokensUsed?: SortOrder;
    createdAt?: SortOrder;
    interactionType?: SortOrder;
    project?: ProjectOrderByWithRelationInput;
  };

  export type AiInteractionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AiInteractionWhereInput | AiInteractionWhereInput[];
      OR?: AiInteractionWhereInput[];
      NOT?: AiInteractionWhereInput | AiInteractionWhereInput[];
      projectId?: StringFilter<"AiInteraction"> | string;
      prompt?: StringFilter<"AiInteraction"> | string;
      response?: StringFilter<"AiInteraction"> | string;
      tokensUsed?: IntFilter<"AiInteraction"> | number;
      createdAt?: DateTimeFilter<"AiInteraction"> | Date | string;
      interactionType?: StringFilter<"AiInteraction"> | string;
      project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>;
    },
    "id"
  >;

  export type AiInteractionOrderByWithAggregationInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    prompt?: SortOrder;
    response?: SortOrder;
    tokensUsed?: SortOrder;
    createdAt?: SortOrder;
    interactionType?: SortOrder;
    _count?: AiInteractionCountOrderByAggregateInput;
    _avg?: AiInteractionAvgOrderByAggregateInput;
    _max?: AiInteractionMaxOrderByAggregateInput;
    _min?: AiInteractionMinOrderByAggregateInput;
    _sum?: AiInteractionSumOrderByAggregateInput;
  };

  export type AiInteractionScalarWhereWithAggregatesInput = {
    AND?:
      | AiInteractionScalarWhereWithAggregatesInput
      | AiInteractionScalarWhereWithAggregatesInput[];
    OR?: AiInteractionScalarWhereWithAggregatesInput[];
    NOT?:
      | AiInteractionScalarWhereWithAggregatesInput
      | AiInteractionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"AiInteraction"> | string;
    projectId?: StringWithAggregatesFilter<"AiInteraction"> | string;
    prompt?: StringWithAggregatesFilter<"AiInteraction"> | string;
    response?: StringWithAggregatesFilter<"AiInteraction"> | string;
    tokensUsed?: IntWithAggregatesFilter<"AiInteraction"> | number;
    createdAt?: DateTimeWithAggregatesFilter<"AiInteraction"> | Date | string;
    interactionType?: StringWithAggregatesFilter<"AiInteraction"> | string;
  };

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[];
    OR?: SubscriptionWhereInput[];
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[];
    id?: StringFilter<"Subscription"> | string;
    userId?: StringFilter<"Subscription"> | string;
    stripeSubscriptionId?: StringNullableFilter<"Subscription"> | string | null;
    stripePriceId?: StringNullableFilter<"Subscription"> | string | null;
    stripeCurrentPeriodEnd?:
      | DateTimeNullableFilter<"Subscription">
      | Date
      | string
      | null;
    stripeCustomerId?: StringNullableFilter<"Subscription"> | string | null;
    planId?: StringFilter<"Subscription"> | string;
    status?: StringFilter<"Subscription"> | string;
    createdAt?: DateTimeFilter<"Subscription"> | Date | string;
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    stripeSubscriptionId?: SortOrderInput | SortOrder;
    stripePriceId?: SortOrderInput | SortOrder;
    stripeCurrentPeriodEnd?: SortOrderInput | SortOrder;
    stripeCustomerId?: SortOrderInput | SortOrder;
    planId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      stripeSubscriptionId?: string;
      AND?: SubscriptionWhereInput | SubscriptionWhereInput[];
      OR?: SubscriptionWhereInput[];
      NOT?: SubscriptionWhereInput | SubscriptionWhereInput[];
      stripePriceId?: StringNullableFilter<"Subscription"> | string | null;
      stripeCurrentPeriodEnd?:
        | DateTimeNullableFilter<"Subscription">
        | Date
        | string
        | null;
      stripeCustomerId?: StringNullableFilter<"Subscription"> | string | null;
      planId?: StringFilter<"Subscription"> | string;
      status?: StringFilter<"Subscription"> | string;
      createdAt?: DateTimeFilter<"Subscription"> | Date | string;
      updatedAt?: DateTimeFilter<"Subscription"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "userId" | "stripeSubscriptionId"
  >;

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    stripeSubscriptionId?: SortOrderInput | SortOrder;
    stripePriceId?: SortOrderInput | SortOrder;
    stripeCurrentPeriodEnd?: SortOrderInput | SortOrder;
    stripeCustomerId?: SortOrderInput | SortOrder;
    planId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: SubscriptionCountOrderByAggregateInput;
    _max?: SubscriptionMaxOrderByAggregateInput;
    _min?: SubscriptionMinOrderByAggregateInput;
  };

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?:
      | SubscriptionScalarWhereWithAggregatesInput
      | SubscriptionScalarWhereWithAggregatesInput[];
    OR?: SubscriptionScalarWhereWithAggregatesInput[];
    NOT?:
      | SubscriptionScalarWhereWithAggregatesInput
      | SubscriptionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Subscription"> | string;
    userId?: StringWithAggregatesFilter<"Subscription"> | string;
    stripeSubscriptionId?:
      | StringNullableWithAggregatesFilter<"Subscription">
      | string
      | null;
    stripePriceId?:
      | StringNullableWithAggregatesFilter<"Subscription">
      | string
      | null;
    stripeCurrentPeriodEnd?:
      | DateTimeNullableWithAggregatesFilter<"Subscription">
      | Date
      | string
      | null;
    stripeCustomerId?:
      | StringNullableWithAggregatesFilter<"Subscription">
      | string
      | null;
    planId?: StringWithAggregatesFilter<"Subscription"> | string;
    status?: StringWithAggregatesFilter<"Subscription"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string;
  };

  export type SubscriptionUsageWhereInput = {
    AND?: SubscriptionUsageWhereInput | SubscriptionUsageWhereInput[];
    OR?: SubscriptionUsageWhereInput[];
    NOT?: SubscriptionUsageWhereInput | SubscriptionUsageWhereInput[];
    id?: StringFilter<"SubscriptionUsage"> | string;
    userId?: StringFilter<"SubscriptionUsage"> | string;
    projectsCreated?: IntFilter<"SubscriptionUsage"> | number;
    collaboratorsInvited?: IntFilter<"SubscriptionUsage"> | number;
    aiSuggestionsUsed?: IntFilter<"SubscriptionUsage"> | number;
    wordsProcessed?: IntFilter<"SubscriptionUsage"> | number;
    lastResetDate?: DateTimeFilter<"SubscriptionUsage"> | Date | string;
    createdAt?: DateTimeFilter<"SubscriptionUsage"> | Date | string;
    updatedAt?: DateTimeFilter<"SubscriptionUsage"> | Date | string;
  };

  export type SubscriptionUsageOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    projectsCreated?: SortOrder;
    collaboratorsInvited?: SortOrder;
    aiSuggestionsUsed?: SortOrder;
    wordsProcessed?: SortOrder;
    lastResetDate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SubscriptionUsageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      AND?: SubscriptionUsageWhereInput | SubscriptionUsageWhereInput[];
      OR?: SubscriptionUsageWhereInput[];
      NOT?: SubscriptionUsageWhereInput | SubscriptionUsageWhereInput[];
      projectsCreated?: IntFilter<"SubscriptionUsage"> | number;
      collaboratorsInvited?: IntFilter<"SubscriptionUsage"> | number;
      aiSuggestionsUsed?: IntFilter<"SubscriptionUsage"> | number;
      wordsProcessed?: IntFilter<"SubscriptionUsage"> | number;
      lastResetDate?: DateTimeFilter<"SubscriptionUsage"> | Date | string;
      createdAt?: DateTimeFilter<"SubscriptionUsage"> | Date | string;
      updatedAt?: DateTimeFilter<"SubscriptionUsage"> | Date | string;
    },
    "id" | "userId"
  >;

  export type SubscriptionUsageOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    projectsCreated?: SortOrder;
    collaboratorsInvited?: SortOrder;
    aiSuggestionsUsed?: SortOrder;
    wordsProcessed?: SortOrder;
    lastResetDate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: SubscriptionUsageCountOrderByAggregateInput;
    _avg?: SubscriptionUsageAvgOrderByAggregateInput;
    _max?: SubscriptionUsageMaxOrderByAggregateInput;
    _min?: SubscriptionUsageMinOrderByAggregateInput;
    _sum?: SubscriptionUsageSumOrderByAggregateInput;
  };

  export type SubscriptionUsageScalarWhereWithAggregatesInput = {
    AND?:
      | SubscriptionUsageScalarWhereWithAggregatesInput
      | SubscriptionUsageScalarWhereWithAggregatesInput[];
    OR?: SubscriptionUsageScalarWhereWithAggregatesInput[];
    NOT?:
      | SubscriptionUsageScalarWhereWithAggregatesInput
      | SubscriptionUsageScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"SubscriptionUsage"> | string;
    userId?: StringWithAggregatesFilter<"SubscriptionUsage"> | string;
    projectsCreated?: IntWithAggregatesFilter<"SubscriptionUsage"> | number;
    collaboratorsInvited?:
      | IntWithAggregatesFilter<"SubscriptionUsage">
      | number;
    aiSuggestionsUsed?: IntWithAggregatesFilter<"SubscriptionUsage"> | number;
    wordsProcessed?: IntWithAggregatesFilter<"SubscriptionUsage"> | number;
    lastResetDate?:
      | DateTimeWithAggregatesFilter<"SubscriptionUsage">
      | Date
      | string;
    createdAt?:
      | DateTimeWithAggregatesFilter<"SubscriptionUsage">
      | Date
      | string;
    updatedAt?:
      | DateTimeWithAggregatesFilter<"SubscriptionUsage">
      | Date
      | string;
  };

  export type UserCreateInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput;
    apiUsage?: ApiUsageCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectCreateNestedManyWithoutUserInput;
    projectInvitations?: ProjectInvitationCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput;
    apiUsage?: ApiUsageUncheckedCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectUncheckedCreateNestedManyWithoutUserInput;
    projectInvitations?: ProjectInvitationUncheckedCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput;
    apiUsage?: ApiUsageUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUpdateManyWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    apiUsage?: ApiUsageUncheckedUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUncheckedUpdateManyWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUncheckedUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AccountCreateInput = {
    id?: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    user: UserCreateNestedOneWithoutAccountsInput;
  };

  export type AccountUncheckedCreateInput = {
    id?: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
  };

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput;
  };

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AccountCreateManyInput = {
    id?: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
  };

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type SessionCreateInput = {
    id?: string;
    sessionToken: string;
    expires: Date | string;
    user: UserCreateNestedOneWithoutSessionsInput;
  };

  export type SessionUncheckedCreateInput = {
    id?: string;
    sessionToken: string;
    userId: string;
    expires: Date | string;
  };

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sessionToken?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput;
  };

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sessionToken?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionCreateManyInput = {
    id?: string;
    sessionToken: string;
    userId: string;
    expires: Date | string;
  };

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sessionToken?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sessionToken?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VerificationTokenCreateInput = {
    identifier: string;
    token: string;
    expires: Date | string;
  };

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string;
    token: string;
    expires: Date | string;
  };

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VerificationTokenCreateManyInput = {
    identifier: string;
    token: string;
    expires: Date | string;
  };

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProjectCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
    user: UserCreateNestedOneWithoutProjectsInput;
    sharedWith?: SharedProjectCreateNestedManyWithoutProjectInput;
    invitations?: ProjectInvitationCreateNestedManyWithoutProjectInput;
    exportHistory?: ExportHistoryCreateNestedManyWithoutProjectInput;
    writingAnalytics?: WritingAnalyticsCreateNestedOneWithoutProjectInput;
    aiInteractions?: AiInteractionCreateNestedManyWithoutProjectInput;
  };

  export type ProjectUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
    sharedWith?: SharedProjectUncheckedCreateNestedManyWithoutProjectInput;
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutProjectInput;
    exportHistory?: ExportHistoryUncheckedCreateNestedManyWithoutProjectInput;
    writingAnalytics?: WritingAnalyticsUncheckedCreateNestedOneWithoutProjectInput;
    aiInteractions?: AiInteractionUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput;
    sharedWith?: SharedProjectUpdateManyWithoutProjectNestedInput;
    invitations?: ProjectInvitationUpdateManyWithoutProjectNestedInput;
    exportHistory?: ExportHistoryUpdateManyWithoutProjectNestedInput;
    writingAnalytics?: WritingAnalyticsUpdateOneWithoutProjectNestedInput;
    aiInteractions?: AiInteractionUpdateManyWithoutProjectNestedInput;
  };

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    sharedWith?: SharedProjectUncheckedUpdateManyWithoutProjectNestedInput;
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutProjectNestedInput;
    exportHistory?: ExportHistoryUncheckedUpdateManyWithoutProjectNestedInput;
    writingAnalytics?: WritingAnalyticsUncheckedUpdateOneWithoutProjectNestedInput;
    aiInteractions?: AiInteractionUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type ProjectCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
  };

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type UserPreferenceCreateInput = {
    id?: string;
    theme?: string;
    emailNotifications?: boolean;
    aiSuggestions?: boolean;
    autoSave?: boolean;
    fontSize?: number;
    editorFontFamily?: string;
    user: UserCreateNestedOneWithoutPreferencesInput;
  };

  export type UserPreferenceUncheckedCreateInput = {
    id?: string;
    userId: string;
    theme?: string;
    emailNotifications?: boolean;
    aiSuggestions?: boolean;
    autoSave?: boolean;
    fontSize?: number;
    editorFontFamily?: string;
  };

  export type UserPreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    theme?: StringFieldUpdateOperationsInput | string;
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean;
    aiSuggestions?: BoolFieldUpdateOperationsInput | boolean;
    autoSave?: BoolFieldUpdateOperationsInput | boolean;
    fontSize?: IntFieldUpdateOperationsInput | number;
    editorFontFamily?: StringFieldUpdateOperationsInput | string;
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput;
  };

  export type UserPreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    theme?: StringFieldUpdateOperationsInput | string;
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean;
    aiSuggestions?: BoolFieldUpdateOperationsInput | boolean;
    autoSave?: BoolFieldUpdateOperationsInput | boolean;
    fontSize?: IntFieldUpdateOperationsInput | number;
    editorFontFamily?: StringFieldUpdateOperationsInput | string;
  };

  export type UserPreferenceCreateManyInput = {
    id?: string;
    userId: string;
    theme?: string;
    emailNotifications?: boolean;
    aiSuggestions?: boolean;
    autoSave?: boolean;
    fontSize?: number;
    editorFontFamily?: string;
  };

  export type UserPreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    theme?: StringFieldUpdateOperationsInput | string;
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean;
    aiSuggestions?: BoolFieldUpdateOperationsInput | boolean;
    autoSave?: BoolFieldUpdateOperationsInput | boolean;
    fontSize?: IntFieldUpdateOperationsInput | number;
    editorFontFamily?: StringFieldUpdateOperationsInput | string;
  };

  export type UserPreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    theme?: StringFieldUpdateOperationsInput | string;
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean;
    aiSuggestions?: BoolFieldUpdateOperationsInput | boolean;
    autoSave?: BoolFieldUpdateOperationsInput | boolean;
    fontSize?: IntFieldUpdateOperationsInput | number;
    editorFontFamily?: StringFieldUpdateOperationsInput | string;
  };

  export type ApiUsageCreateInput = {
    id?: string;
    totalTokensUsed?: number;
    monthlyTokensUsed?: number;
    lastResetDate?: Date | string;
    user: UserCreateNestedOneWithoutApiUsageInput;
  };

  export type ApiUsageUncheckedCreateInput = {
    id?: string;
    userId: string;
    totalTokensUsed?: number;
    monthlyTokensUsed?: number;
    lastResetDate?: Date | string;
  };

  export type ApiUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalTokensUsed?: IntFieldUpdateOperationsInput | number;
    monthlyTokensUsed?: IntFieldUpdateOperationsInput | number;
    lastResetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutApiUsageNestedInput;
  };

  export type ApiUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    totalTokensUsed?: IntFieldUpdateOperationsInput | number;
    monthlyTokensUsed?: IntFieldUpdateOperationsInput | number;
    lastResetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApiUsageCreateManyInput = {
    id?: string;
    userId: string;
    totalTokensUsed?: number;
    monthlyTokensUsed?: number;
    lastResetDate?: Date | string;
  };

  export type ApiUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalTokensUsed?: IntFieldUpdateOperationsInput | number;
    monthlyTokensUsed?: IntFieldUpdateOperationsInput | number;
    lastResetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApiUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    totalTokensUsed?: IntFieldUpdateOperationsInput | number;
    monthlyTokensUsed?: IntFieldUpdateOperationsInput | number;
    lastResetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SharedProjectCreateInput = {
    id?: string;
    permissions?: string;
    createdAt?: Date | string;
    project: ProjectCreateNestedOneWithoutSharedWithInput;
    user: UserCreateNestedOneWithoutSharedProjectsInput;
  };

  export type SharedProjectUncheckedCreateInput = {
    id?: string;
    projectId: string;
    userId: string;
    permissions?: string;
    createdAt?: Date | string;
  };

  export type SharedProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    permissions?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: ProjectUpdateOneRequiredWithoutSharedWithNestedInput;
    user?: UserUpdateOneRequiredWithoutSharedProjectsNestedInput;
  };

  export type SharedProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    permissions?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SharedProjectCreateManyInput = {
    id?: string;
    projectId: string;
    userId: string;
    permissions?: string;
    createdAt?: Date | string;
  };

  export type SharedProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    permissions?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SharedProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    permissions?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProjectInvitationCreateInput = {
    id?: string;
    email: string;
    token: string;
    expires: Date | string;
    createdAt?: Date | string;
    project: ProjectCreateNestedOneWithoutInvitationsInput;
    user?: UserCreateNestedOneWithoutProjectInvitationsInput;
  };

  export type ProjectInvitationUncheckedCreateInput = {
    id?: string;
    projectId: string;
    email: string;
    userId?: string | null;
    token: string;
    expires: Date | string;
    createdAt?: Date | string;
  };

  export type ProjectInvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: ProjectUpdateOneRequiredWithoutInvitationsNestedInput;
    user?: UserUpdateOneWithoutProjectInvitationsNestedInput;
  };

  export type ProjectInvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    token?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProjectInvitationCreateManyInput = {
    id?: string;
    projectId: string;
    email: string;
    userId?: string | null;
    token: string;
    expires: Date | string;
    createdAt?: Date | string;
  };

  export type ProjectInvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProjectInvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    token?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExportHistoryCreateInput = {
    id?: string;
    format: string;
    createdAt?: Date | string;
    fileUrl?: string | null;
    project: ProjectCreateNestedOneWithoutExportHistoryInput;
  };

  export type ExportHistoryUncheckedCreateInput = {
    id?: string;
    projectId: string;
    format: string;
    createdAt?: Date | string;
    fileUrl?: string | null;
  };

  export type ExportHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    format?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    project?: ProjectUpdateOneRequiredWithoutExportHistoryNestedInput;
  };

  export type ExportHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    format?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ExportHistoryCreateManyInput = {
    id?: string;
    projectId: string;
    format: string;
    createdAt?: Date | string;
    fileUrl?: string | null;
  };

  export type ExportHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    format?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ExportHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    format?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type WritingAnalyticsCreateInput = {
    id?: string;
    wordCount?: number;
    characterCount?: number;
    sentenceCount?: number;
    paragraphCount?: number;
    readabilityScore?: number | null;
    topicAnalysis?: NullableJsonNullValueInput | InputJsonValue;
    lastUpdated?: Date | string;
    project: ProjectCreateNestedOneWithoutWritingAnalyticsInput;
  };

  export type WritingAnalyticsUncheckedCreateInput = {
    id?: string;
    projectId: string;
    wordCount?: number;
    characterCount?: number;
    sentenceCount?: number;
    paragraphCount?: number;
    readabilityScore?: number | null;
    topicAnalysis?: NullableJsonNullValueInput | InputJsonValue;
    lastUpdated?: Date | string;
  };

  export type WritingAnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wordCount?: IntFieldUpdateOperationsInput | number;
    characterCount?: IntFieldUpdateOperationsInput | number;
    sentenceCount?: IntFieldUpdateOperationsInput | number;
    paragraphCount?: IntFieldUpdateOperationsInput | number;
    readabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null;
    topicAnalysis?: NullableJsonNullValueInput | InputJsonValue;
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: ProjectUpdateOneRequiredWithoutWritingAnalyticsNestedInput;
  };

  export type WritingAnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    wordCount?: IntFieldUpdateOperationsInput | number;
    characterCount?: IntFieldUpdateOperationsInput | number;
    sentenceCount?: IntFieldUpdateOperationsInput | number;
    paragraphCount?: IntFieldUpdateOperationsInput | number;
    readabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null;
    topicAnalysis?: NullableJsonNullValueInput | InputJsonValue;
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WritingAnalyticsCreateManyInput = {
    id?: string;
    projectId: string;
    wordCount?: number;
    characterCount?: number;
    sentenceCount?: number;
    paragraphCount?: number;
    readabilityScore?: number | null;
    topicAnalysis?: NullableJsonNullValueInput | InputJsonValue;
    lastUpdated?: Date | string;
  };

  export type WritingAnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wordCount?: IntFieldUpdateOperationsInput | number;
    characterCount?: IntFieldUpdateOperationsInput | number;
    sentenceCount?: IntFieldUpdateOperationsInput | number;
    paragraphCount?: IntFieldUpdateOperationsInput | number;
    readabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null;
    topicAnalysis?: NullableJsonNullValueInput | InputJsonValue;
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WritingAnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    wordCount?: IntFieldUpdateOperationsInput | number;
    characterCount?: IntFieldUpdateOperationsInput | number;
    sentenceCount?: IntFieldUpdateOperationsInput | number;
    paragraphCount?: IntFieldUpdateOperationsInput | number;
    readabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null;
    topicAnalysis?: NullableJsonNullValueInput | InputJsonValue;
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AiInteractionCreateInput = {
    id?: string;
    prompt: string;
    response: string;
    tokensUsed: number;
    createdAt?: Date | string;
    interactionType: string;
    project: ProjectCreateNestedOneWithoutAiInteractionsInput;
  };

  export type AiInteractionUncheckedCreateInput = {
    id?: string;
    projectId: string;
    prompt: string;
    response: string;
    tokensUsed: number;
    createdAt?: Date | string;
    interactionType: string;
  };

  export type AiInteractionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: StringFieldUpdateOperationsInput | string;
    tokensUsed?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    interactionType?: StringFieldUpdateOperationsInput | string;
    project?: ProjectUpdateOneRequiredWithoutAiInteractionsNestedInput;
  };

  export type AiInteractionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: StringFieldUpdateOperationsInput | string;
    tokensUsed?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    interactionType?: StringFieldUpdateOperationsInput | string;
  };

  export type AiInteractionCreateManyInput = {
    id?: string;
    projectId: string;
    prompt: string;
    response: string;
    tokensUsed: number;
    createdAt?: Date | string;
    interactionType: string;
  };

  export type AiInteractionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: StringFieldUpdateOperationsInput | string;
    tokensUsed?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    interactionType?: StringFieldUpdateOperationsInput | string;
  };

  export type AiInteractionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: StringFieldUpdateOperationsInput | string;
    tokensUsed?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    interactionType?: StringFieldUpdateOperationsInput | string;
  };

  export type SubscriptionCreateInput = {
    id?: string;
    stripeSubscriptionId?: string | null;
    stripePriceId?: string | null;
    stripeCurrentPeriodEnd?: Date | string | null;
    stripeCustomerId?: string | null;
    planId?: string;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutSubscriptionInput;
  };

  export type SubscriptionUncheckedCreateInput = {
    id?: string;
    userId: string;
    stripeSubscriptionId?: string | null;
    stripePriceId?: string | null;
    stripeCurrentPeriodEnd?: Date | string | null;
    stripeCustomerId?: string | null;
    planId?: string;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    stripeSubscriptionId?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null;
    stripeCurrentPeriodEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    planId?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput;
  };

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    stripeSubscriptionId?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null;
    stripeCurrentPeriodEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    planId?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriptionCreateManyInput = {
    id?: string;
    userId: string;
    stripeSubscriptionId?: string | null;
    stripePriceId?: string | null;
    stripeCurrentPeriodEnd?: Date | string | null;
    stripeCustomerId?: string | null;
    planId?: string;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    stripeSubscriptionId?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null;
    stripeCurrentPeriodEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    planId?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    stripeSubscriptionId?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null;
    stripeCurrentPeriodEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    planId?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriptionUsageCreateInput = {
    id?: string;
    userId: string;
    projectsCreated?: number;
    collaboratorsInvited?: number;
    aiSuggestionsUsed?: number;
    wordsProcessed?: number;
    lastResetDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubscriptionUsageUncheckedCreateInput = {
    id?: string;
    userId: string;
    projectsCreated?: number;
    collaboratorsInvited?: number;
    aiSuggestionsUsed?: number;
    wordsProcessed?: number;
    lastResetDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubscriptionUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    projectsCreated?: IntFieldUpdateOperationsInput | number;
    collaboratorsInvited?: IntFieldUpdateOperationsInput | number;
    aiSuggestionsUsed?: IntFieldUpdateOperationsInput | number;
    wordsProcessed?: IntFieldUpdateOperationsInput | number;
    lastResetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriptionUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    projectsCreated?: IntFieldUpdateOperationsInput | number;
    collaboratorsInvited?: IntFieldUpdateOperationsInput | number;
    aiSuggestionsUsed?: IntFieldUpdateOperationsInput | number;
    wordsProcessed?: IntFieldUpdateOperationsInput | number;
    lastResetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriptionUsageCreateManyInput = {
    id?: string;
    userId: string;
    projectsCreated?: number;
    collaboratorsInvited?: number;
    aiSuggestionsUsed?: number;
    wordsProcessed?: number;
    lastResetDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubscriptionUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    projectsCreated?: IntFieldUpdateOperationsInput | number;
    collaboratorsInvited?: IntFieldUpdateOperationsInput | number;
    aiSuggestionsUsed?: IntFieldUpdateOperationsInput | number;
    wordsProcessed?: IntFieldUpdateOperationsInput | number;
    lastResetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriptionUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    projectsCreated?: IntFieldUpdateOperationsInput | number;
    collaboratorsInvited?: IntFieldUpdateOperationsInput | number;
    aiSuggestionsUsed?: IntFieldUpdateOperationsInput | number;
    wordsProcessed?: IntFieldUpdateOperationsInput | number;
    lastResetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput;
    some?: ProjectWhereInput;
    none?: ProjectWhereInput;
  };

  export type AccountListRelationFilter = {
    every?: AccountWhereInput;
    some?: AccountWhereInput;
    none?: AccountWhereInput;
  };

  export type SessionListRelationFilter = {
    every?: SessionWhereInput;
    some?: SessionWhereInput;
    none?: SessionWhereInput;
  };

  export type UserPreferenceNullableScalarRelationFilter = {
    is?: UserPreferenceWhereInput | null;
    isNot?: UserPreferenceWhereInput | null;
  };

  export type ApiUsageNullableScalarRelationFilter = {
    is?: ApiUsageWhereInput | null;
    isNot?: ApiUsageWhereInput | null;
  };

  export type SharedProjectListRelationFilter = {
    every?: SharedProjectWhereInput;
    some?: SharedProjectWhereInput;
    none?: SharedProjectWhereInput;
  };

  export type ProjectInvitationListRelationFilter = {
    every?: ProjectInvitationWhereInput;
    some?: ProjectInvitationWhereInput;
    none?: ProjectInvitationWhereInput;
  };

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null;
    isNot?: SubscriptionWhereInput | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type SharedProjectOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProjectInvitationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    image?: SortOrder;
    hashedPassword?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    stripeCustomerId?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    image?: SortOrder;
    hashedPassword?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    stripeCustomerId?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    image?: SortOrder;
    hashedPassword?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    stripeCustomerId?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string;
    providerAccountId: string;
  };

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    refresh_token?: SortOrder;
    access_token?: SortOrder;
    expires_at?: SortOrder;
    token_type?: SortOrder;
    scope?: SortOrder;
    id_token?: SortOrder;
    session_state?: SortOrder;
  };

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder;
  };

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    refresh_token?: SortOrder;
    access_token?: SortOrder;
    expires_at?: SortOrder;
    token_type?: SortOrder;
    scope?: SortOrder;
    id_token?: SortOrder;
    session_state?: SortOrder;
  };

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    refresh_token?: SortOrder;
    access_token?: SortOrder;
    expires_at?: SortOrder;
    token_type?: SortOrder;
    scope?: SortOrder;
    id_token?: SortOrder;
    session_state?: SortOrder;
  };

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder;
    sessionToken?: SortOrder;
    userId?: SortOrder;
    expires?: SortOrder;
  };

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder;
    sessionToken?: SortOrder;
    userId?: SortOrder;
    expires?: SortOrder;
  };

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder;
    sessionToken?: SortOrder;
    userId?: SortOrder;
    expires?: SortOrder;
  };

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string;
    token: string;
  };

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder;
    token?: SortOrder;
    expires?: SortOrder;
  };

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder;
    token?: SortOrder;
    expires?: SortOrder;
  };

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder;
    token?: SortOrder;
    expires?: SortOrder;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type ExportHistoryListRelationFilter = {
    every?: ExportHistoryWhereInput;
    some?: ExportHistoryWhereInput;
    none?: ExportHistoryWhereInput;
  };

  export type WritingAnalyticsNullableScalarRelationFilter = {
    is?: WritingAnalyticsWhereInput | null;
    isNot?: WritingAnalyticsWhereInput | null;
  };

  export type AiInteractionListRelationFilter = {
    every?: AiInteractionWhereInput;
    some?: AiInteractionWhereInput;
    none?: AiInteractionWhereInput;
  };

  export type ExportHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AiInteractionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    isPublic?: SortOrder;
  };

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    isPublic?: SortOrder;
  };

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    isPublic?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type UserPreferenceCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    theme?: SortOrder;
    emailNotifications?: SortOrder;
    aiSuggestions?: SortOrder;
    autoSave?: SortOrder;
    fontSize?: SortOrder;
    editorFontFamily?: SortOrder;
  };

  export type UserPreferenceAvgOrderByAggregateInput = {
    fontSize?: SortOrder;
  };

  export type UserPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    theme?: SortOrder;
    emailNotifications?: SortOrder;
    aiSuggestions?: SortOrder;
    autoSave?: SortOrder;
    fontSize?: SortOrder;
    editorFontFamily?: SortOrder;
  };

  export type UserPreferenceMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    theme?: SortOrder;
    emailNotifications?: SortOrder;
    aiSuggestions?: SortOrder;
    autoSave?: SortOrder;
    fontSize?: SortOrder;
    editorFontFamily?: SortOrder;
  };

  export type UserPreferenceSumOrderByAggregateInput = {
    fontSize?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type ApiUsageCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    totalTokensUsed?: SortOrder;
    monthlyTokensUsed?: SortOrder;
    lastResetDate?: SortOrder;
  };

  export type ApiUsageAvgOrderByAggregateInput = {
    totalTokensUsed?: SortOrder;
    monthlyTokensUsed?: SortOrder;
  };

  export type ApiUsageMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    totalTokensUsed?: SortOrder;
    monthlyTokensUsed?: SortOrder;
    lastResetDate?: SortOrder;
  };

  export type ApiUsageMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    totalTokensUsed?: SortOrder;
    monthlyTokensUsed?: SortOrder;
    lastResetDate?: SortOrder;
  };

  export type ApiUsageSumOrderByAggregateInput = {
    totalTokensUsed?: SortOrder;
    monthlyTokensUsed?: SortOrder;
  };

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput;
    isNot?: ProjectWhereInput;
  };

  export type SharedProjectProjectIdUserIdCompoundUniqueInput = {
    projectId: string;
    userId: string;
  };

  export type SharedProjectCountOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    userId?: SortOrder;
    permissions?: SortOrder;
    createdAt?: SortOrder;
  };

  export type SharedProjectMaxOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    userId?: SortOrder;
    permissions?: SortOrder;
    createdAt?: SortOrder;
  };

  export type SharedProjectMinOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    userId?: SortOrder;
    permissions?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null;
    isNot?: UserWhereInput | null;
  };

  export type ProjectInvitationProjectIdEmailCompoundUniqueInput = {
    projectId: string;
    email: string;
  };

  export type ProjectInvitationCountOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    email?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    expires?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ProjectInvitationMaxOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    email?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    expires?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ProjectInvitationMinOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    email?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    expires?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ExportHistoryCountOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    format?: SortOrder;
    createdAt?: SortOrder;
    fileUrl?: SortOrder;
  };

  export type ExportHistoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    format?: SortOrder;
    createdAt?: SortOrder;
    fileUrl?: SortOrder;
  };

  export type ExportHistoryMinOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    format?: SortOrder;
    createdAt?: SortOrder;
    fileUrl?: SortOrder;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonNullableFilterBase<$PrismaModel>>, "path">
      >;

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type WritingAnalyticsCountOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    wordCount?: SortOrder;
    characterCount?: SortOrder;
    sentenceCount?: SortOrder;
    paragraphCount?: SortOrder;
    readabilityScore?: SortOrder;
    topicAnalysis?: SortOrder;
    lastUpdated?: SortOrder;
  };

  export type WritingAnalyticsAvgOrderByAggregateInput = {
    wordCount?: SortOrder;
    characterCount?: SortOrder;
    sentenceCount?: SortOrder;
    paragraphCount?: SortOrder;
    readabilityScore?: SortOrder;
  };

  export type WritingAnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    wordCount?: SortOrder;
    characterCount?: SortOrder;
    sentenceCount?: SortOrder;
    paragraphCount?: SortOrder;
    readabilityScore?: SortOrder;
    lastUpdated?: SortOrder;
  };

  export type WritingAnalyticsMinOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    wordCount?: SortOrder;
    characterCount?: SortOrder;
    sentenceCount?: SortOrder;
    paragraphCount?: SortOrder;
    readabilityScore?: SortOrder;
    lastUpdated?: SortOrder;
  };

  export type WritingAnalyticsSumOrderByAggregateInput = {
    wordCount?: SortOrder;
    characterCount?: SortOrder;
    sentenceCount?: SortOrder;
    paragraphCount?: SortOrder;
    readabilityScore?: SortOrder;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          "path"
        >
      >;

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
  };

  export type AiInteractionCountOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    prompt?: SortOrder;
    response?: SortOrder;
    tokensUsed?: SortOrder;
    createdAt?: SortOrder;
    interactionType?: SortOrder;
  };

  export type AiInteractionAvgOrderByAggregateInput = {
    tokensUsed?: SortOrder;
  };

  export type AiInteractionMaxOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    prompt?: SortOrder;
    response?: SortOrder;
    tokensUsed?: SortOrder;
    createdAt?: SortOrder;
    interactionType?: SortOrder;
  };

  export type AiInteractionMinOrderByAggregateInput = {
    id?: SortOrder;
    projectId?: SortOrder;
    prompt?: SortOrder;
    response?: SortOrder;
    tokensUsed?: SortOrder;
    createdAt?: SortOrder;
    interactionType?: SortOrder;
  };

  export type AiInteractionSumOrderByAggregateInput = {
    tokensUsed?: SortOrder;
  };

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    stripeSubscriptionId?: SortOrder;
    stripePriceId?: SortOrder;
    stripeCurrentPeriodEnd?: SortOrder;
    stripeCustomerId?: SortOrder;
    planId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    stripeSubscriptionId?: SortOrder;
    stripePriceId?: SortOrder;
    stripeCurrentPeriodEnd?: SortOrder;
    stripeCustomerId?: SortOrder;
    planId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    stripeSubscriptionId?: SortOrder;
    stripePriceId?: SortOrder;
    stripeCurrentPeriodEnd?: SortOrder;
    stripeCustomerId?: SortOrder;
    planId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SubscriptionUsageCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    projectsCreated?: SortOrder;
    collaboratorsInvited?: SortOrder;
    aiSuggestionsUsed?: SortOrder;
    wordsProcessed?: SortOrder;
    lastResetDate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SubscriptionUsageAvgOrderByAggregateInput = {
    projectsCreated?: SortOrder;
    collaboratorsInvited?: SortOrder;
    aiSuggestionsUsed?: SortOrder;
    wordsProcessed?: SortOrder;
  };

  export type SubscriptionUsageMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    projectsCreated?: SortOrder;
    collaboratorsInvited?: SortOrder;
    aiSuggestionsUsed?: SortOrder;
    wordsProcessed?: SortOrder;
    lastResetDate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SubscriptionUsageMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    projectsCreated?: SortOrder;
    collaboratorsInvited?: SortOrder;
    aiSuggestionsUsed?: SortOrder;
    wordsProcessed?: SortOrder;
    lastResetDate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SubscriptionUsageSumOrderByAggregateInput = {
    projectsCreated?: SortOrder;
    collaboratorsInvited?: SortOrder;
    aiSuggestionsUsed?: SortOrder;
    wordsProcessed?: SortOrder;
  };

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ProjectCreateWithoutUserInput,
          ProjectUncheckedCreateWithoutUserInput
        >
      | ProjectCreateWithoutUserInput[]
      | ProjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProjectCreateOrConnectWithoutUserInput
      | ProjectCreateOrConnectWithoutUserInput[];
    createMany?: ProjectCreateManyUserInputEnvelope;
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
  };

  export type AccountCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
  };

  export type SessionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          SessionCreateWithoutUserInput,
          SessionUncheckedCreateWithoutUserInput
        >
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[];
    createMany?: SessionCreateManyUserInputEnvelope;
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
  };

  export type UserPreferenceCreateNestedOneWithoutUserInput = {
    create?: XOR<
      UserPreferenceCreateWithoutUserInput,
      UserPreferenceUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput;
    connect?: UserPreferenceWhereUniqueInput;
  };

  export type ApiUsageCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ApiUsageCreateWithoutUserInput,
      ApiUsageUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ApiUsageCreateOrConnectWithoutUserInput;
    connect?: ApiUsageWhereUniqueInput;
  };

  export type SharedProjectCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          SharedProjectCreateWithoutUserInput,
          SharedProjectUncheckedCreateWithoutUserInput
        >
      | SharedProjectCreateWithoutUserInput[]
      | SharedProjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SharedProjectCreateOrConnectWithoutUserInput
      | SharedProjectCreateOrConnectWithoutUserInput[];
    createMany?: SharedProjectCreateManyUserInputEnvelope;
    connect?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
  };

  export type ProjectInvitationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ProjectInvitationCreateWithoutUserInput,
          ProjectInvitationUncheckedCreateWithoutUserInput
        >
      | ProjectInvitationCreateWithoutUserInput[]
      | ProjectInvitationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProjectInvitationCreateOrConnectWithoutUserInput
      | ProjectInvitationCreateOrConnectWithoutUserInput[];
    createMany?: ProjectInvitationCreateManyUserInputEnvelope;
    connect?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
  };

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<
      SubscriptionCreateWithoutUserInput,
      SubscriptionUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput;
    connect?: SubscriptionWhereUniqueInput;
  };

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ProjectCreateWithoutUserInput,
          ProjectUncheckedCreateWithoutUserInput
        >
      | ProjectCreateWithoutUserInput[]
      | ProjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProjectCreateOrConnectWithoutUserInput
      | ProjectCreateOrConnectWithoutUserInput[];
    createMany?: ProjectCreateManyUserInputEnvelope;
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
  };

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
  };

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          SessionCreateWithoutUserInput,
          SessionUncheckedCreateWithoutUserInput
        >
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[];
    createMany?: SessionCreateManyUserInputEnvelope;
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
  };

  export type UserPreferenceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      UserPreferenceCreateWithoutUserInput,
      UserPreferenceUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput;
    connect?: UserPreferenceWhereUniqueInput;
  };

  export type ApiUsageUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ApiUsageCreateWithoutUserInput,
      ApiUsageUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ApiUsageCreateOrConnectWithoutUserInput;
    connect?: ApiUsageWhereUniqueInput;
  };

  export type SharedProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          SharedProjectCreateWithoutUserInput,
          SharedProjectUncheckedCreateWithoutUserInput
        >
      | SharedProjectCreateWithoutUserInput[]
      | SharedProjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SharedProjectCreateOrConnectWithoutUserInput
      | SharedProjectCreateOrConnectWithoutUserInput[];
    createMany?: SharedProjectCreateManyUserInputEnvelope;
    connect?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
  };

  export type ProjectInvitationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ProjectInvitationCreateWithoutUserInput,
          ProjectInvitationUncheckedCreateWithoutUserInput
        >
      | ProjectInvitationCreateWithoutUserInput[]
      | ProjectInvitationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProjectInvitationCreateOrConnectWithoutUserInput
      | ProjectInvitationCreateOrConnectWithoutUserInput[];
    createMany?: ProjectInvitationCreateManyUserInputEnvelope;
    connect?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
  };

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      SubscriptionCreateWithoutUserInput,
      SubscriptionUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput;
    connect?: SubscriptionWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ProjectCreateWithoutUserInput,
          ProjectUncheckedCreateWithoutUserInput
        >
      | ProjectCreateWithoutUserInput[]
      | ProjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProjectCreateOrConnectWithoutUserInput
      | ProjectCreateOrConnectWithoutUserInput[];
    upsert?:
      | ProjectUpsertWithWhereUniqueWithoutUserInput
      | ProjectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ProjectCreateManyUserInputEnvelope;
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    update?:
      | ProjectUpdateWithWhereUniqueWithoutUserInput
      | ProjectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ProjectUpdateManyWithWhereWithoutUserInput
      | ProjectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[];
  };

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    upsert?:
      | AccountUpsertWithWhereUniqueWithoutUserInput
      | AccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    update?:
      | AccountUpdateWithWhereUniqueWithoutUserInput
      | AccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AccountUpdateManyWithWhereWithoutUserInput
      | AccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[];
  };

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          SessionCreateWithoutUserInput,
          SessionUncheckedCreateWithoutUserInput
        >
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[];
    upsert?:
      | SessionUpsertWithWhereUniqueWithoutUserInput
      | SessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: SessionCreateManyUserInputEnvelope;
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    update?:
      | SessionUpdateWithWhereUniqueWithoutUserInput
      | SessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | SessionUpdateManyWithWhereWithoutUserInput
      | SessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[];
  };

  export type UserPreferenceUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      UserPreferenceCreateWithoutUserInput,
      UserPreferenceUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput;
    upsert?: UserPreferenceUpsertWithoutUserInput;
    disconnect?: UserPreferenceWhereInput | boolean;
    delete?: UserPreferenceWhereInput | boolean;
    connect?: UserPreferenceWhereUniqueInput;
    update?: XOR<
      XOR<
        UserPreferenceUpdateToOneWithWhereWithoutUserInput,
        UserPreferenceUpdateWithoutUserInput
      >,
      UserPreferenceUncheckedUpdateWithoutUserInput
    >;
  };

  export type ApiUsageUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ApiUsageCreateWithoutUserInput,
      ApiUsageUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ApiUsageCreateOrConnectWithoutUserInput;
    upsert?: ApiUsageUpsertWithoutUserInput;
    disconnect?: ApiUsageWhereInput | boolean;
    delete?: ApiUsageWhereInput | boolean;
    connect?: ApiUsageWhereUniqueInput;
    update?: XOR<
      XOR<
        ApiUsageUpdateToOneWithWhereWithoutUserInput,
        ApiUsageUpdateWithoutUserInput
      >,
      ApiUsageUncheckedUpdateWithoutUserInput
    >;
  };

  export type SharedProjectUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          SharedProjectCreateWithoutUserInput,
          SharedProjectUncheckedCreateWithoutUserInput
        >
      | SharedProjectCreateWithoutUserInput[]
      | SharedProjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SharedProjectCreateOrConnectWithoutUserInput
      | SharedProjectCreateOrConnectWithoutUserInput[];
    upsert?:
      | SharedProjectUpsertWithWhereUniqueWithoutUserInput
      | SharedProjectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: SharedProjectCreateManyUserInputEnvelope;
    set?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
    disconnect?:
      | SharedProjectWhereUniqueInput
      | SharedProjectWhereUniqueInput[];
    delete?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
    connect?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
    update?:
      | SharedProjectUpdateWithWhereUniqueWithoutUserInput
      | SharedProjectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | SharedProjectUpdateManyWithWhereWithoutUserInput
      | SharedProjectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | SharedProjectScalarWhereInput
      | SharedProjectScalarWhereInput[];
  };

  export type ProjectInvitationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ProjectInvitationCreateWithoutUserInput,
          ProjectInvitationUncheckedCreateWithoutUserInput
        >
      | ProjectInvitationCreateWithoutUserInput[]
      | ProjectInvitationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProjectInvitationCreateOrConnectWithoutUserInput
      | ProjectInvitationCreateOrConnectWithoutUserInput[];
    upsert?:
      | ProjectInvitationUpsertWithWhereUniqueWithoutUserInput
      | ProjectInvitationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ProjectInvitationCreateManyUserInputEnvelope;
    set?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    disconnect?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    delete?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    connect?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    update?:
      | ProjectInvitationUpdateWithWhereUniqueWithoutUserInput
      | ProjectInvitationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ProjectInvitationUpdateManyWithWhereWithoutUserInput
      | ProjectInvitationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | ProjectInvitationScalarWhereInput
      | ProjectInvitationScalarWhereInput[];
  };

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      SubscriptionCreateWithoutUserInput,
      SubscriptionUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput;
    upsert?: SubscriptionUpsertWithoutUserInput;
    disconnect?: SubscriptionWhereInput | boolean;
    delete?: SubscriptionWhereInput | boolean;
    connect?: SubscriptionWhereUniqueInput;
    update?: XOR<
      XOR<
        SubscriptionUpdateToOneWithWhereWithoutUserInput,
        SubscriptionUpdateWithoutUserInput
      >,
      SubscriptionUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ProjectCreateWithoutUserInput,
          ProjectUncheckedCreateWithoutUserInput
        >
      | ProjectCreateWithoutUserInput[]
      | ProjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProjectCreateOrConnectWithoutUserInput
      | ProjectCreateOrConnectWithoutUserInput[];
    upsert?:
      | ProjectUpsertWithWhereUniqueWithoutUserInput
      | ProjectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ProjectCreateManyUserInputEnvelope;
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[];
    update?:
      | ProjectUpdateWithWhereUniqueWithoutUserInput
      | ProjectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ProjectUpdateManyWithWhereWithoutUserInput
      | ProjectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[];
  };

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    upsert?:
      | AccountUpsertWithWhereUniqueWithoutUserInput
      | AccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    update?:
      | AccountUpdateWithWhereUniqueWithoutUserInput
      | AccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AccountUpdateManyWithWhereWithoutUserInput
      | AccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[];
  };

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          SessionCreateWithoutUserInput,
          SessionUncheckedCreateWithoutUserInput
        >
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[];
    upsert?:
      | SessionUpsertWithWhereUniqueWithoutUserInput
      | SessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: SessionCreateManyUserInputEnvelope;
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    update?:
      | SessionUpdateWithWhereUniqueWithoutUserInput
      | SessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | SessionUpdateManyWithWhereWithoutUserInput
      | SessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[];
  };

  export type UserPreferenceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      UserPreferenceCreateWithoutUserInput,
      UserPreferenceUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput;
    upsert?: UserPreferenceUpsertWithoutUserInput;
    disconnect?: UserPreferenceWhereInput | boolean;
    delete?: UserPreferenceWhereInput | boolean;
    connect?: UserPreferenceWhereUniqueInput;
    update?: XOR<
      XOR<
        UserPreferenceUpdateToOneWithWhereWithoutUserInput,
        UserPreferenceUpdateWithoutUserInput
      >,
      UserPreferenceUncheckedUpdateWithoutUserInput
    >;
  };

  export type ApiUsageUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ApiUsageCreateWithoutUserInput,
      ApiUsageUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ApiUsageCreateOrConnectWithoutUserInput;
    upsert?: ApiUsageUpsertWithoutUserInput;
    disconnect?: ApiUsageWhereInput | boolean;
    delete?: ApiUsageWhereInput | boolean;
    connect?: ApiUsageWhereUniqueInput;
    update?: XOR<
      XOR<
        ApiUsageUpdateToOneWithWhereWithoutUserInput,
        ApiUsageUpdateWithoutUserInput
      >,
      ApiUsageUncheckedUpdateWithoutUserInput
    >;
  };

  export type SharedProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          SharedProjectCreateWithoutUserInput,
          SharedProjectUncheckedCreateWithoutUserInput
        >
      | SharedProjectCreateWithoutUserInput[]
      | SharedProjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SharedProjectCreateOrConnectWithoutUserInput
      | SharedProjectCreateOrConnectWithoutUserInput[];
    upsert?:
      | SharedProjectUpsertWithWhereUniqueWithoutUserInput
      | SharedProjectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: SharedProjectCreateManyUserInputEnvelope;
    set?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
    disconnect?:
      | SharedProjectWhereUniqueInput
      | SharedProjectWhereUniqueInput[];
    delete?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
    connect?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
    update?:
      | SharedProjectUpdateWithWhereUniqueWithoutUserInput
      | SharedProjectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | SharedProjectUpdateManyWithWhereWithoutUserInput
      | SharedProjectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | SharedProjectScalarWhereInput
      | SharedProjectScalarWhereInput[];
  };

  export type ProjectInvitationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ProjectInvitationCreateWithoutUserInput,
          ProjectInvitationUncheckedCreateWithoutUserInput
        >
      | ProjectInvitationCreateWithoutUserInput[]
      | ProjectInvitationUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ProjectInvitationCreateOrConnectWithoutUserInput
      | ProjectInvitationCreateOrConnectWithoutUserInput[];
    upsert?:
      | ProjectInvitationUpsertWithWhereUniqueWithoutUserInput
      | ProjectInvitationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ProjectInvitationCreateManyUserInputEnvelope;
    set?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    disconnect?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    delete?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    connect?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    update?:
      | ProjectInvitationUpdateWithWhereUniqueWithoutUserInput
      | ProjectInvitationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ProjectInvitationUpdateManyWithWhereWithoutUserInput
      | ProjectInvitationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | ProjectInvitationScalarWhereInput
      | ProjectInvitationScalarWhereInput[];
  };

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      SubscriptionCreateWithoutUserInput,
      SubscriptionUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput;
    upsert?: SubscriptionUpsertWithoutUserInput;
    disconnect?: SubscriptionWhereInput | boolean;
    delete?: SubscriptionWhereInput | boolean;
    connect?: SubscriptionWhereUniqueInput;
    update?: XOR<
      XOR<
        SubscriptionUpdateToOneWithWhereWithoutUserInput,
        SubscriptionUpdateWithoutUserInput
      >,
      SubscriptionUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput;
    connect?: UserWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput;
    upsert?: UserUpsertWithoutAccountsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAccountsInput,
        UserUpdateWithoutAccountsInput
      >,
      UserUncheckedUpdateWithoutAccountsInput
    >;
  };

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput;
    upsert?: UserUpsertWithoutSessionsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSessionsInput,
        UserUpdateWithoutSessionsInput
      >,
      UserUncheckedUpdateWithoutSessionsInput
    >;
  };

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<
      UserCreateWithoutProjectsInput,
      UserUncheckedCreateWithoutProjectsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput;
    connect?: UserWhereUniqueInput;
  };

  export type SharedProjectCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          SharedProjectCreateWithoutProjectInput,
          SharedProjectUncheckedCreateWithoutProjectInput
        >
      | SharedProjectCreateWithoutProjectInput[]
      | SharedProjectUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | SharedProjectCreateOrConnectWithoutProjectInput
      | SharedProjectCreateOrConnectWithoutProjectInput[];
    createMany?: SharedProjectCreateManyProjectInputEnvelope;
    connect?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
  };

  export type ProjectInvitationCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          ProjectInvitationCreateWithoutProjectInput,
          ProjectInvitationUncheckedCreateWithoutProjectInput
        >
      | ProjectInvitationCreateWithoutProjectInput[]
      | ProjectInvitationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ProjectInvitationCreateOrConnectWithoutProjectInput
      | ProjectInvitationCreateOrConnectWithoutProjectInput[];
    createMany?: ProjectInvitationCreateManyProjectInputEnvelope;
    connect?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
  };

  export type ExportHistoryCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          ExportHistoryCreateWithoutProjectInput,
          ExportHistoryUncheckedCreateWithoutProjectInput
        >
      | ExportHistoryCreateWithoutProjectInput[]
      | ExportHistoryUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ExportHistoryCreateOrConnectWithoutProjectInput
      | ExportHistoryCreateOrConnectWithoutProjectInput[];
    createMany?: ExportHistoryCreateManyProjectInputEnvelope;
    connect?: ExportHistoryWhereUniqueInput | ExportHistoryWhereUniqueInput[];
  };

  export type WritingAnalyticsCreateNestedOneWithoutProjectInput = {
    create?: XOR<
      WritingAnalyticsCreateWithoutProjectInput,
      WritingAnalyticsUncheckedCreateWithoutProjectInput
    >;
    connectOrCreate?: WritingAnalyticsCreateOrConnectWithoutProjectInput;
    connect?: WritingAnalyticsWhereUniqueInput;
  };

  export type AiInteractionCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          AiInteractionCreateWithoutProjectInput,
          AiInteractionUncheckedCreateWithoutProjectInput
        >
      | AiInteractionCreateWithoutProjectInput[]
      | AiInteractionUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | AiInteractionCreateOrConnectWithoutProjectInput
      | AiInteractionCreateOrConnectWithoutProjectInput[];
    createMany?: AiInteractionCreateManyProjectInputEnvelope;
    connect?: AiInteractionWhereUniqueInput | AiInteractionWhereUniqueInput[];
  };

  export type SharedProjectUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          SharedProjectCreateWithoutProjectInput,
          SharedProjectUncheckedCreateWithoutProjectInput
        >
      | SharedProjectCreateWithoutProjectInput[]
      | SharedProjectUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | SharedProjectCreateOrConnectWithoutProjectInput
      | SharedProjectCreateOrConnectWithoutProjectInput[];
    createMany?: SharedProjectCreateManyProjectInputEnvelope;
    connect?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
  };

  export type ProjectInvitationUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          ProjectInvitationCreateWithoutProjectInput,
          ProjectInvitationUncheckedCreateWithoutProjectInput
        >
      | ProjectInvitationCreateWithoutProjectInput[]
      | ProjectInvitationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ProjectInvitationCreateOrConnectWithoutProjectInput
      | ProjectInvitationCreateOrConnectWithoutProjectInput[];
    createMany?: ProjectInvitationCreateManyProjectInputEnvelope;
    connect?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
  };

  export type ExportHistoryUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          ExportHistoryCreateWithoutProjectInput,
          ExportHistoryUncheckedCreateWithoutProjectInput
        >
      | ExportHistoryCreateWithoutProjectInput[]
      | ExportHistoryUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ExportHistoryCreateOrConnectWithoutProjectInput
      | ExportHistoryCreateOrConnectWithoutProjectInput[];
    createMany?: ExportHistoryCreateManyProjectInputEnvelope;
    connect?: ExportHistoryWhereUniqueInput | ExportHistoryWhereUniqueInput[];
  };

  export type WritingAnalyticsUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<
      WritingAnalyticsCreateWithoutProjectInput,
      WritingAnalyticsUncheckedCreateWithoutProjectInput
    >;
    connectOrCreate?: WritingAnalyticsCreateOrConnectWithoutProjectInput;
    connect?: WritingAnalyticsWhereUniqueInput;
  };

  export type AiInteractionUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          AiInteractionCreateWithoutProjectInput,
          AiInteractionUncheckedCreateWithoutProjectInput
        >
      | AiInteractionCreateWithoutProjectInput[]
      | AiInteractionUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | AiInteractionCreateOrConnectWithoutProjectInput
      | AiInteractionCreateOrConnectWithoutProjectInput[];
    createMany?: AiInteractionCreateManyProjectInputEnvelope;
    connect?: AiInteractionWhereUniqueInput | AiInteractionWhereUniqueInput[];
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<
      UserCreateWithoutProjectsInput,
      UserUncheckedCreateWithoutProjectsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput;
    upsert?: UserUpsertWithoutProjectsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutProjectsInput,
        UserUpdateWithoutProjectsInput
      >,
      UserUncheckedUpdateWithoutProjectsInput
    >;
  };

  export type SharedProjectUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          SharedProjectCreateWithoutProjectInput,
          SharedProjectUncheckedCreateWithoutProjectInput
        >
      | SharedProjectCreateWithoutProjectInput[]
      | SharedProjectUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | SharedProjectCreateOrConnectWithoutProjectInput
      | SharedProjectCreateOrConnectWithoutProjectInput[];
    upsert?:
      | SharedProjectUpsertWithWhereUniqueWithoutProjectInput
      | SharedProjectUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: SharedProjectCreateManyProjectInputEnvelope;
    set?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
    disconnect?:
      | SharedProjectWhereUniqueInput
      | SharedProjectWhereUniqueInput[];
    delete?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
    connect?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
    update?:
      | SharedProjectUpdateWithWhereUniqueWithoutProjectInput
      | SharedProjectUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | SharedProjectUpdateManyWithWhereWithoutProjectInput
      | SharedProjectUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?:
      | SharedProjectScalarWhereInput
      | SharedProjectScalarWhereInput[];
  };

  export type ProjectInvitationUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          ProjectInvitationCreateWithoutProjectInput,
          ProjectInvitationUncheckedCreateWithoutProjectInput
        >
      | ProjectInvitationCreateWithoutProjectInput[]
      | ProjectInvitationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ProjectInvitationCreateOrConnectWithoutProjectInput
      | ProjectInvitationCreateOrConnectWithoutProjectInput[];
    upsert?:
      | ProjectInvitationUpsertWithWhereUniqueWithoutProjectInput
      | ProjectInvitationUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: ProjectInvitationCreateManyProjectInputEnvelope;
    set?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    disconnect?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    delete?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    connect?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    update?:
      | ProjectInvitationUpdateWithWhereUniqueWithoutProjectInput
      | ProjectInvitationUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | ProjectInvitationUpdateManyWithWhereWithoutProjectInput
      | ProjectInvitationUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?:
      | ProjectInvitationScalarWhereInput
      | ProjectInvitationScalarWhereInput[];
  };

  export type ExportHistoryUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          ExportHistoryCreateWithoutProjectInput,
          ExportHistoryUncheckedCreateWithoutProjectInput
        >
      | ExportHistoryCreateWithoutProjectInput[]
      | ExportHistoryUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ExportHistoryCreateOrConnectWithoutProjectInput
      | ExportHistoryCreateOrConnectWithoutProjectInput[];
    upsert?:
      | ExportHistoryUpsertWithWhereUniqueWithoutProjectInput
      | ExportHistoryUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: ExportHistoryCreateManyProjectInputEnvelope;
    set?: ExportHistoryWhereUniqueInput | ExportHistoryWhereUniqueInput[];
    disconnect?:
      | ExportHistoryWhereUniqueInput
      | ExportHistoryWhereUniqueInput[];
    delete?: ExportHistoryWhereUniqueInput | ExportHistoryWhereUniqueInput[];
    connect?: ExportHistoryWhereUniqueInput | ExportHistoryWhereUniqueInput[];
    update?:
      | ExportHistoryUpdateWithWhereUniqueWithoutProjectInput
      | ExportHistoryUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | ExportHistoryUpdateManyWithWhereWithoutProjectInput
      | ExportHistoryUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?:
      | ExportHistoryScalarWhereInput
      | ExportHistoryScalarWhereInput[];
  };

  export type WritingAnalyticsUpdateOneWithoutProjectNestedInput = {
    create?: XOR<
      WritingAnalyticsCreateWithoutProjectInput,
      WritingAnalyticsUncheckedCreateWithoutProjectInput
    >;
    connectOrCreate?: WritingAnalyticsCreateOrConnectWithoutProjectInput;
    upsert?: WritingAnalyticsUpsertWithoutProjectInput;
    disconnect?: WritingAnalyticsWhereInput | boolean;
    delete?: WritingAnalyticsWhereInput | boolean;
    connect?: WritingAnalyticsWhereUniqueInput;
    update?: XOR<
      XOR<
        WritingAnalyticsUpdateToOneWithWhereWithoutProjectInput,
        WritingAnalyticsUpdateWithoutProjectInput
      >,
      WritingAnalyticsUncheckedUpdateWithoutProjectInput
    >;
  };

  export type AiInteractionUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          AiInteractionCreateWithoutProjectInput,
          AiInteractionUncheckedCreateWithoutProjectInput
        >
      | AiInteractionCreateWithoutProjectInput[]
      | AiInteractionUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | AiInteractionCreateOrConnectWithoutProjectInput
      | AiInteractionCreateOrConnectWithoutProjectInput[];
    upsert?:
      | AiInteractionUpsertWithWhereUniqueWithoutProjectInput
      | AiInteractionUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: AiInteractionCreateManyProjectInputEnvelope;
    set?: AiInteractionWhereUniqueInput | AiInteractionWhereUniqueInput[];
    disconnect?:
      | AiInteractionWhereUniqueInput
      | AiInteractionWhereUniqueInput[];
    delete?: AiInteractionWhereUniqueInput | AiInteractionWhereUniqueInput[];
    connect?: AiInteractionWhereUniqueInput | AiInteractionWhereUniqueInput[];
    update?:
      | AiInteractionUpdateWithWhereUniqueWithoutProjectInput
      | AiInteractionUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | AiInteractionUpdateManyWithWhereWithoutProjectInput
      | AiInteractionUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?:
      | AiInteractionScalarWhereInput
      | AiInteractionScalarWhereInput[];
  };

  export type SharedProjectUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          SharedProjectCreateWithoutProjectInput,
          SharedProjectUncheckedCreateWithoutProjectInput
        >
      | SharedProjectCreateWithoutProjectInput[]
      | SharedProjectUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | SharedProjectCreateOrConnectWithoutProjectInput
      | SharedProjectCreateOrConnectWithoutProjectInput[];
    upsert?:
      | SharedProjectUpsertWithWhereUniqueWithoutProjectInput
      | SharedProjectUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: SharedProjectCreateManyProjectInputEnvelope;
    set?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
    disconnect?:
      | SharedProjectWhereUniqueInput
      | SharedProjectWhereUniqueInput[];
    delete?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
    connect?: SharedProjectWhereUniqueInput | SharedProjectWhereUniqueInput[];
    update?:
      | SharedProjectUpdateWithWhereUniqueWithoutProjectInput
      | SharedProjectUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | SharedProjectUpdateManyWithWhereWithoutProjectInput
      | SharedProjectUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?:
      | SharedProjectScalarWhereInput
      | SharedProjectScalarWhereInput[];
  };

  export type ProjectInvitationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          ProjectInvitationCreateWithoutProjectInput,
          ProjectInvitationUncheckedCreateWithoutProjectInput
        >
      | ProjectInvitationCreateWithoutProjectInput[]
      | ProjectInvitationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ProjectInvitationCreateOrConnectWithoutProjectInput
      | ProjectInvitationCreateOrConnectWithoutProjectInput[];
    upsert?:
      | ProjectInvitationUpsertWithWhereUniqueWithoutProjectInput
      | ProjectInvitationUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: ProjectInvitationCreateManyProjectInputEnvelope;
    set?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    disconnect?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    delete?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    connect?:
      | ProjectInvitationWhereUniqueInput
      | ProjectInvitationWhereUniqueInput[];
    update?:
      | ProjectInvitationUpdateWithWhereUniqueWithoutProjectInput
      | ProjectInvitationUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | ProjectInvitationUpdateManyWithWhereWithoutProjectInput
      | ProjectInvitationUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?:
      | ProjectInvitationScalarWhereInput
      | ProjectInvitationScalarWhereInput[];
  };

  export type ExportHistoryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          ExportHistoryCreateWithoutProjectInput,
          ExportHistoryUncheckedCreateWithoutProjectInput
        >
      | ExportHistoryCreateWithoutProjectInput[]
      | ExportHistoryUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | ExportHistoryCreateOrConnectWithoutProjectInput
      | ExportHistoryCreateOrConnectWithoutProjectInput[];
    upsert?:
      | ExportHistoryUpsertWithWhereUniqueWithoutProjectInput
      | ExportHistoryUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: ExportHistoryCreateManyProjectInputEnvelope;
    set?: ExportHistoryWhereUniqueInput | ExportHistoryWhereUniqueInput[];
    disconnect?:
      | ExportHistoryWhereUniqueInput
      | ExportHistoryWhereUniqueInput[];
    delete?: ExportHistoryWhereUniqueInput | ExportHistoryWhereUniqueInput[];
    connect?: ExportHistoryWhereUniqueInput | ExportHistoryWhereUniqueInput[];
    update?:
      | ExportHistoryUpdateWithWhereUniqueWithoutProjectInput
      | ExportHistoryUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | ExportHistoryUpdateManyWithWhereWithoutProjectInput
      | ExportHistoryUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?:
      | ExportHistoryScalarWhereInput
      | ExportHistoryScalarWhereInput[];
  };

  export type WritingAnalyticsUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<
      WritingAnalyticsCreateWithoutProjectInput,
      WritingAnalyticsUncheckedCreateWithoutProjectInput
    >;
    connectOrCreate?: WritingAnalyticsCreateOrConnectWithoutProjectInput;
    upsert?: WritingAnalyticsUpsertWithoutProjectInput;
    disconnect?: WritingAnalyticsWhereInput | boolean;
    delete?: WritingAnalyticsWhereInput | boolean;
    connect?: WritingAnalyticsWhereUniqueInput;
    update?: XOR<
      XOR<
        WritingAnalyticsUpdateToOneWithWhereWithoutProjectInput,
        WritingAnalyticsUpdateWithoutProjectInput
      >,
      WritingAnalyticsUncheckedUpdateWithoutProjectInput
    >;
  };

  export type AiInteractionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          AiInteractionCreateWithoutProjectInput,
          AiInteractionUncheckedCreateWithoutProjectInput
        >
      | AiInteractionCreateWithoutProjectInput[]
      | AiInteractionUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | AiInteractionCreateOrConnectWithoutProjectInput
      | AiInteractionCreateOrConnectWithoutProjectInput[];
    upsert?:
      | AiInteractionUpsertWithWhereUniqueWithoutProjectInput
      | AiInteractionUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: AiInteractionCreateManyProjectInputEnvelope;
    set?: AiInteractionWhereUniqueInput | AiInteractionWhereUniqueInput[];
    disconnect?:
      | AiInteractionWhereUniqueInput
      | AiInteractionWhereUniqueInput[];
    delete?: AiInteractionWhereUniqueInput | AiInteractionWhereUniqueInput[];
    connect?: AiInteractionWhereUniqueInput | AiInteractionWhereUniqueInput[];
    update?:
      | AiInteractionUpdateWithWhereUniqueWithoutProjectInput
      | AiInteractionUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | AiInteractionUpdateManyWithWhereWithoutProjectInput
      | AiInteractionUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?:
      | AiInteractionScalarWhereInput
      | AiInteractionScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<
      UserCreateWithoutPreferencesInput,
      UserUncheckedCreateWithoutPreferencesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput;
    connect?: UserWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<
      UserCreateWithoutPreferencesInput,
      UserUncheckedCreateWithoutPreferencesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput;
    upsert?: UserUpsertWithoutPreferencesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPreferencesInput,
        UserUpdateWithoutPreferencesInput
      >,
      UserUncheckedUpdateWithoutPreferencesInput
    >;
  };

  export type UserCreateNestedOneWithoutApiUsageInput = {
    create?: XOR<
      UserCreateWithoutApiUsageInput,
      UserUncheckedCreateWithoutApiUsageInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutApiUsageInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutApiUsageNestedInput = {
    create?: XOR<
      UserCreateWithoutApiUsageInput,
      UserUncheckedCreateWithoutApiUsageInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutApiUsageInput;
    upsert?: UserUpsertWithoutApiUsageInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutApiUsageInput,
        UserUpdateWithoutApiUsageInput
      >,
      UserUncheckedUpdateWithoutApiUsageInput
    >;
  };

  export type ProjectCreateNestedOneWithoutSharedWithInput = {
    create?: XOR<
      ProjectCreateWithoutSharedWithInput,
      ProjectUncheckedCreateWithoutSharedWithInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutSharedWithInput;
    connect?: ProjectWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutSharedProjectsInput = {
    create?: XOR<
      UserCreateWithoutSharedProjectsInput,
      UserUncheckedCreateWithoutSharedProjectsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSharedProjectsInput;
    connect?: UserWhereUniqueInput;
  };

  export type ProjectUpdateOneRequiredWithoutSharedWithNestedInput = {
    create?: XOR<
      ProjectCreateWithoutSharedWithInput,
      ProjectUncheckedCreateWithoutSharedWithInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutSharedWithInput;
    upsert?: ProjectUpsertWithoutSharedWithInput;
    connect?: ProjectWhereUniqueInput;
    update?: XOR<
      XOR<
        ProjectUpdateToOneWithWhereWithoutSharedWithInput,
        ProjectUpdateWithoutSharedWithInput
      >,
      ProjectUncheckedUpdateWithoutSharedWithInput
    >;
  };

  export type UserUpdateOneRequiredWithoutSharedProjectsNestedInput = {
    create?: XOR<
      UserCreateWithoutSharedProjectsInput,
      UserUncheckedCreateWithoutSharedProjectsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSharedProjectsInput;
    upsert?: UserUpsertWithoutSharedProjectsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSharedProjectsInput,
        UserUpdateWithoutSharedProjectsInput
      >,
      UserUncheckedUpdateWithoutSharedProjectsInput
    >;
  };

  export type ProjectCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<
      ProjectCreateWithoutInvitationsInput,
      ProjectUncheckedCreateWithoutInvitationsInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutInvitationsInput;
    connect?: ProjectWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutProjectInvitationsInput = {
    create?: XOR<
      UserCreateWithoutProjectInvitationsInput,
      UserUncheckedCreateWithoutProjectInvitationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProjectInvitationsInput;
    connect?: UserWhereUniqueInput;
  };

  export type ProjectUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<
      ProjectCreateWithoutInvitationsInput,
      ProjectUncheckedCreateWithoutInvitationsInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutInvitationsInput;
    upsert?: ProjectUpsertWithoutInvitationsInput;
    connect?: ProjectWhereUniqueInput;
    update?: XOR<
      XOR<
        ProjectUpdateToOneWithWhereWithoutInvitationsInput,
        ProjectUpdateWithoutInvitationsInput
      >,
      ProjectUncheckedUpdateWithoutInvitationsInput
    >;
  };

  export type UserUpdateOneWithoutProjectInvitationsNestedInput = {
    create?: XOR<
      UserCreateWithoutProjectInvitationsInput,
      UserUncheckedCreateWithoutProjectInvitationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProjectInvitationsInput;
    upsert?: UserUpsertWithoutProjectInvitationsInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutProjectInvitationsInput,
        UserUpdateWithoutProjectInvitationsInput
      >,
      UserUncheckedUpdateWithoutProjectInvitationsInput
    >;
  };

  export type ProjectCreateNestedOneWithoutExportHistoryInput = {
    create?: XOR<
      ProjectCreateWithoutExportHistoryInput,
      ProjectUncheckedCreateWithoutExportHistoryInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutExportHistoryInput;
    connect?: ProjectWhereUniqueInput;
  };

  export type ProjectUpdateOneRequiredWithoutExportHistoryNestedInput = {
    create?: XOR<
      ProjectCreateWithoutExportHistoryInput,
      ProjectUncheckedCreateWithoutExportHistoryInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutExportHistoryInput;
    upsert?: ProjectUpsertWithoutExportHistoryInput;
    connect?: ProjectWhereUniqueInput;
    update?: XOR<
      XOR<
        ProjectUpdateToOneWithWhereWithoutExportHistoryInput,
        ProjectUpdateWithoutExportHistoryInput
      >,
      ProjectUncheckedUpdateWithoutExportHistoryInput
    >;
  };

  export type ProjectCreateNestedOneWithoutWritingAnalyticsInput = {
    create?: XOR<
      ProjectCreateWithoutWritingAnalyticsInput,
      ProjectUncheckedCreateWithoutWritingAnalyticsInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutWritingAnalyticsInput;
    connect?: ProjectWhereUniqueInput;
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type ProjectUpdateOneRequiredWithoutWritingAnalyticsNestedInput = {
    create?: XOR<
      ProjectCreateWithoutWritingAnalyticsInput,
      ProjectUncheckedCreateWithoutWritingAnalyticsInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutWritingAnalyticsInput;
    upsert?: ProjectUpsertWithoutWritingAnalyticsInput;
    connect?: ProjectWhereUniqueInput;
    update?: XOR<
      XOR<
        ProjectUpdateToOneWithWhereWithoutWritingAnalyticsInput,
        ProjectUpdateWithoutWritingAnalyticsInput
      >,
      ProjectUncheckedUpdateWithoutWritingAnalyticsInput
    >;
  };

  export type ProjectCreateNestedOneWithoutAiInteractionsInput = {
    create?: XOR<
      ProjectCreateWithoutAiInteractionsInput,
      ProjectUncheckedCreateWithoutAiInteractionsInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutAiInteractionsInput;
    connect?: ProjectWhereUniqueInput;
  };

  export type ProjectUpdateOneRequiredWithoutAiInteractionsNestedInput = {
    create?: XOR<
      ProjectCreateWithoutAiInteractionsInput,
      ProjectUncheckedCreateWithoutAiInteractionsInput
    >;
    connectOrCreate?: ProjectCreateOrConnectWithoutAiInteractionsInput;
    upsert?: ProjectUpsertWithoutAiInteractionsInput;
    connect?: ProjectWhereUniqueInput;
    update?: XOR<
      XOR<
        ProjectUpdateToOneWithWhereWithoutAiInteractionsInput,
        ProjectUpdateWithoutAiInteractionsInput
      >,
      ProjectUncheckedUpdateWithoutAiInteractionsInput
    >;
  };

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<
      UserCreateWithoutSubscriptionInput,
      UserUncheckedCreateWithoutSubscriptionInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<
      UserCreateWithoutSubscriptionInput,
      UserUncheckedCreateWithoutSubscriptionInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput;
    upsert?: UserUpsertWithoutSubscriptionInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSubscriptionInput,
        UserUpdateWithoutSubscriptionInput
      >,
      UserUncheckedUpdateWithoutSubscriptionInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, "path">
      >;

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type ProjectCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
    sharedWith?: SharedProjectCreateNestedManyWithoutProjectInput;
    invitations?: ProjectInvitationCreateNestedManyWithoutProjectInput;
    exportHistory?: ExportHistoryCreateNestedManyWithoutProjectInput;
    writingAnalytics?: WritingAnalyticsCreateNestedOneWithoutProjectInput;
    aiInteractions?: AiInteractionCreateNestedManyWithoutProjectInput;
  };

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
    sharedWith?: SharedProjectUncheckedCreateNestedManyWithoutProjectInput;
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutProjectInput;
    exportHistory?: ExportHistoryUncheckedCreateNestedManyWithoutProjectInput;
    writingAnalytics?: WritingAnalyticsUncheckedCreateNestedOneWithoutProjectInput;
    aiInteractions?: AiInteractionUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput;
    create: XOR<
      ProjectCreateWithoutUserInput,
      ProjectUncheckedCreateWithoutUserInput
    >;
  };

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type AccountCreateWithoutUserInput = {
    id?: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
  };

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
  };

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput;
    create: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >;
  };

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type SessionCreateWithoutUserInput = {
    id?: string;
    sessionToken: string;
    expires: Date | string;
  };

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string;
    sessionToken: string;
    expires: Date | string;
  };

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput;
    create: XOR<
      SessionCreateWithoutUserInput,
      SessionUncheckedCreateWithoutUserInput
    >;
  };

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type UserPreferenceCreateWithoutUserInput = {
    id?: string;
    theme?: string;
    emailNotifications?: boolean;
    aiSuggestions?: boolean;
    autoSave?: boolean;
    fontSize?: number;
    editorFontFamily?: string;
  };

  export type UserPreferenceUncheckedCreateWithoutUserInput = {
    id?: string;
    theme?: string;
    emailNotifications?: boolean;
    aiSuggestions?: boolean;
    autoSave?: boolean;
    fontSize?: number;
    editorFontFamily?: string;
  };

  export type UserPreferenceCreateOrConnectWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput;
    create: XOR<
      UserPreferenceCreateWithoutUserInput,
      UserPreferenceUncheckedCreateWithoutUserInput
    >;
  };

  export type ApiUsageCreateWithoutUserInput = {
    id?: string;
    totalTokensUsed?: number;
    monthlyTokensUsed?: number;
    lastResetDate?: Date | string;
  };

  export type ApiUsageUncheckedCreateWithoutUserInput = {
    id?: string;
    totalTokensUsed?: number;
    monthlyTokensUsed?: number;
    lastResetDate?: Date | string;
  };

  export type ApiUsageCreateOrConnectWithoutUserInput = {
    where: ApiUsageWhereUniqueInput;
    create: XOR<
      ApiUsageCreateWithoutUserInput,
      ApiUsageUncheckedCreateWithoutUserInput
    >;
  };

  export type SharedProjectCreateWithoutUserInput = {
    id?: string;
    permissions?: string;
    createdAt?: Date | string;
    project: ProjectCreateNestedOneWithoutSharedWithInput;
  };

  export type SharedProjectUncheckedCreateWithoutUserInput = {
    id?: string;
    projectId: string;
    permissions?: string;
    createdAt?: Date | string;
  };

  export type SharedProjectCreateOrConnectWithoutUserInput = {
    where: SharedProjectWhereUniqueInput;
    create: XOR<
      SharedProjectCreateWithoutUserInput,
      SharedProjectUncheckedCreateWithoutUserInput
    >;
  };

  export type SharedProjectCreateManyUserInputEnvelope = {
    data: SharedProjectCreateManyUserInput | SharedProjectCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ProjectInvitationCreateWithoutUserInput = {
    id?: string;
    email: string;
    token: string;
    expires: Date | string;
    createdAt?: Date | string;
    project: ProjectCreateNestedOneWithoutInvitationsInput;
  };

  export type ProjectInvitationUncheckedCreateWithoutUserInput = {
    id?: string;
    projectId: string;
    email: string;
    token: string;
    expires: Date | string;
    createdAt?: Date | string;
  };

  export type ProjectInvitationCreateOrConnectWithoutUserInput = {
    where: ProjectInvitationWhereUniqueInput;
    create: XOR<
      ProjectInvitationCreateWithoutUserInput,
      ProjectInvitationUncheckedCreateWithoutUserInput
    >;
  };

  export type ProjectInvitationCreateManyUserInputEnvelope = {
    data:
      | ProjectInvitationCreateManyUserInput
      | ProjectInvitationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type SubscriptionCreateWithoutUserInput = {
    id?: string;
    stripeSubscriptionId?: string | null;
    stripePriceId?: string | null;
    stripeCurrentPeriodEnd?: Date | string | null;
    stripeCustomerId?: string | null;
    planId?: string;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string;
    stripeSubscriptionId?: string | null;
    stripePriceId?: string | null;
    stripeCurrentPeriodEnd?: Date | string | null;
    stripeCustomerId?: string | null;
    planId?: string;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput;
    create: XOR<
      SubscriptionCreateWithoutUserInput,
      SubscriptionUncheckedCreateWithoutUserInput
    >;
  };

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput;
    update: XOR<
      ProjectUpdateWithoutUserInput,
      ProjectUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ProjectCreateWithoutUserInput,
      ProjectUncheckedCreateWithoutUserInput
    >;
  };

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput;
    data: XOR<
      ProjectUpdateWithoutUserInput,
      ProjectUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput;
    data: XOR<
      ProjectUpdateManyMutationInput,
      ProjectUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[];
    OR?: ProjectScalarWhereInput[];
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[];
    id?: StringFilter<"Project"> | string;
    title?: StringFilter<"Project"> | string;
    description?: StringNullableFilter<"Project"> | string | null;
    content?: StringNullableFilter<"Project"> | string | null;
    userId?: StringFilter<"Project"> | string;
    createdAt?: DateTimeFilter<"Project"> | Date | string;
    updatedAt?: DateTimeFilter<"Project"> | Date | string;
    isPublic?: BoolFilter<"Project"> | boolean;
  };

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput;
    update: XOR<
      AccountUpdateWithoutUserInput,
      AccountUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >;
  };

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput;
    data: XOR<
      AccountUpdateWithoutUserInput,
      AccountUncheckedUpdateWithoutUserInput
    >;
  };

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput;
    data: XOR<
      AccountUpdateManyMutationInput,
      AccountUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[];
    OR?: AccountScalarWhereInput[];
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[];
    id?: StringFilter<"Account"> | string;
    userId?: StringFilter<"Account"> | string;
    type?: StringFilter<"Account"> | string;
    provider?: StringFilter<"Account"> | string;
    providerAccountId?: StringFilter<"Account"> | string;
    refresh_token?: StringNullableFilter<"Account"> | string | null;
    access_token?: StringNullableFilter<"Account"> | string | null;
    expires_at?: IntNullableFilter<"Account"> | number | null;
    token_type?: StringNullableFilter<"Account"> | string | null;
    scope?: StringNullableFilter<"Account"> | string | null;
    id_token?: StringNullableFilter<"Account"> | string | null;
    session_state?: StringNullableFilter<"Account"> | string | null;
  };

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput;
    update: XOR<
      SessionUpdateWithoutUserInput,
      SessionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      SessionCreateWithoutUserInput,
      SessionUncheckedCreateWithoutUserInput
    >;
  };

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput;
    data: XOR<
      SessionUpdateWithoutUserInput,
      SessionUncheckedUpdateWithoutUserInput
    >;
  };

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput;
    data: XOR<
      SessionUpdateManyMutationInput,
      SessionUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[];
    OR?: SessionScalarWhereInput[];
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[];
    id?: StringFilter<"Session"> | string;
    sessionToken?: StringFilter<"Session"> | string;
    userId?: StringFilter<"Session"> | string;
    expires?: DateTimeFilter<"Session"> | Date | string;
  };

  export type UserPreferenceUpsertWithoutUserInput = {
    update: XOR<
      UserPreferenceUpdateWithoutUserInput,
      UserPreferenceUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      UserPreferenceCreateWithoutUserInput,
      UserPreferenceUncheckedCreateWithoutUserInput
    >;
    where?: UserPreferenceWhereInput;
  };

  export type UserPreferenceUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPreferenceWhereInput;
    data: XOR<
      UserPreferenceUpdateWithoutUserInput,
      UserPreferenceUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserPreferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    theme?: StringFieldUpdateOperationsInput | string;
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean;
    aiSuggestions?: BoolFieldUpdateOperationsInput | boolean;
    autoSave?: BoolFieldUpdateOperationsInput | boolean;
    fontSize?: IntFieldUpdateOperationsInput | number;
    editorFontFamily?: StringFieldUpdateOperationsInput | string;
  };

  export type UserPreferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    theme?: StringFieldUpdateOperationsInput | string;
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean;
    aiSuggestions?: BoolFieldUpdateOperationsInput | boolean;
    autoSave?: BoolFieldUpdateOperationsInput | boolean;
    fontSize?: IntFieldUpdateOperationsInput | number;
    editorFontFamily?: StringFieldUpdateOperationsInput | string;
  };

  export type ApiUsageUpsertWithoutUserInput = {
    update: XOR<
      ApiUsageUpdateWithoutUserInput,
      ApiUsageUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ApiUsageCreateWithoutUserInput,
      ApiUsageUncheckedCreateWithoutUserInput
    >;
    where?: ApiUsageWhereInput;
  };

  export type ApiUsageUpdateToOneWithWhereWithoutUserInput = {
    where?: ApiUsageWhereInput;
    data: XOR<
      ApiUsageUpdateWithoutUserInput,
      ApiUsageUncheckedUpdateWithoutUserInput
    >;
  };

  export type ApiUsageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalTokensUsed?: IntFieldUpdateOperationsInput | number;
    monthlyTokensUsed?: IntFieldUpdateOperationsInput | number;
    lastResetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApiUsageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalTokensUsed?: IntFieldUpdateOperationsInput | number;
    monthlyTokensUsed?: IntFieldUpdateOperationsInput | number;
    lastResetDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SharedProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: SharedProjectWhereUniqueInput;
    update: XOR<
      SharedProjectUpdateWithoutUserInput,
      SharedProjectUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      SharedProjectCreateWithoutUserInput,
      SharedProjectUncheckedCreateWithoutUserInput
    >;
  };

  export type SharedProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: SharedProjectWhereUniqueInput;
    data: XOR<
      SharedProjectUpdateWithoutUserInput,
      SharedProjectUncheckedUpdateWithoutUserInput
    >;
  };

  export type SharedProjectUpdateManyWithWhereWithoutUserInput = {
    where: SharedProjectScalarWhereInput;
    data: XOR<
      SharedProjectUpdateManyMutationInput,
      SharedProjectUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type SharedProjectScalarWhereInput = {
    AND?: SharedProjectScalarWhereInput | SharedProjectScalarWhereInput[];
    OR?: SharedProjectScalarWhereInput[];
    NOT?: SharedProjectScalarWhereInput | SharedProjectScalarWhereInput[];
    id?: StringFilter<"SharedProject"> | string;
    projectId?: StringFilter<"SharedProject"> | string;
    userId?: StringFilter<"SharedProject"> | string;
    permissions?: StringFilter<"SharedProject"> | string;
    createdAt?: DateTimeFilter<"SharedProject"> | Date | string;
  };

  export type ProjectInvitationUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectInvitationWhereUniqueInput;
    update: XOR<
      ProjectInvitationUpdateWithoutUserInput,
      ProjectInvitationUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ProjectInvitationCreateWithoutUserInput,
      ProjectInvitationUncheckedCreateWithoutUserInput
    >;
  };

  export type ProjectInvitationUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectInvitationWhereUniqueInput;
    data: XOR<
      ProjectInvitationUpdateWithoutUserInput,
      ProjectInvitationUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProjectInvitationUpdateManyWithWhereWithoutUserInput = {
    where: ProjectInvitationScalarWhereInput;
    data: XOR<
      ProjectInvitationUpdateManyMutationInput,
      ProjectInvitationUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ProjectInvitationScalarWhereInput = {
    AND?:
      | ProjectInvitationScalarWhereInput
      | ProjectInvitationScalarWhereInput[];
    OR?: ProjectInvitationScalarWhereInput[];
    NOT?:
      | ProjectInvitationScalarWhereInput
      | ProjectInvitationScalarWhereInput[];
    id?: StringFilter<"ProjectInvitation"> | string;
    projectId?: StringFilter<"ProjectInvitation"> | string;
    email?: StringFilter<"ProjectInvitation"> | string;
    userId?: StringNullableFilter<"ProjectInvitation"> | string | null;
    token?: StringFilter<"ProjectInvitation"> | string;
    expires?: DateTimeFilter<"ProjectInvitation"> | Date | string;
    createdAt?: DateTimeFilter<"ProjectInvitation"> | Date | string;
  };

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<
      SubscriptionUpdateWithoutUserInput,
      SubscriptionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      SubscriptionCreateWithoutUserInput,
      SubscriptionUncheckedCreateWithoutUserInput
    >;
    where?: SubscriptionWhereInput;
  };

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput;
    data: XOR<
      SubscriptionUpdateWithoutUserInput,
      SubscriptionUncheckedUpdateWithoutUserInput
    >;
  };

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    stripeSubscriptionId?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null;
    stripeCurrentPeriodEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    planId?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    stripeSubscriptionId?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null;
    stripeCurrentPeriodEnd?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    planId?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateWithoutAccountsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectCreateNestedManyWithoutUserInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput;
    apiUsage?: ApiUsageCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectCreateNestedManyWithoutUserInput;
    projectInvitations?: ProjectInvitationCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput;
    apiUsage?: ApiUsageUncheckedCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectUncheckedCreateNestedManyWithoutUserInput;
    projectInvitations?: ProjectInvitationUncheckedCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
  };

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<
      UserUpdateWithoutAccountsInput,
      UserUncheckedUpdateWithoutAccountsInput
    >;
    create: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutAccountsInput,
      UserUncheckedUpdateWithoutAccountsInput
    >;
  };

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUpdateManyWithoutUserNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput;
    apiUsage?: ApiUsageUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUpdateManyWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    apiUsage?: ApiUsageUncheckedUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUncheckedUpdateManyWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUncheckedUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type UserCreateWithoutSessionsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput;
    apiUsage?: ApiUsageCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectCreateNestedManyWithoutUserInput;
    projectInvitations?: ProjectInvitationCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput;
    apiUsage?: ApiUsageUncheckedCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectUncheckedCreateNestedManyWithoutUserInput;
    projectInvitations?: ProjectInvitationUncheckedCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
  };

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<
      UserUpdateWithoutSessionsInput,
      UserUncheckedUpdateWithoutSessionsInput
    >;
    create: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSessionsInput,
      UserUncheckedUpdateWithoutSessionsInput
    >;
  };

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput;
    apiUsage?: ApiUsageUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUpdateManyWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    apiUsage?: ApiUsageUncheckedUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUncheckedUpdateManyWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUncheckedUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type UserCreateWithoutProjectsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput;
    apiUsage?: ApiUsageCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectCreateNestedManyWithoutUserInput;
    projectInvitations?: ProjectInvitationCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput;
    apiUsage?: ApiUsageUncheckedCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectUncheckedCreateNestedManyWithoutUserInput;
    projectInvitations?: ProjectInvitationUncheckedCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutProjectsInput,
      UserUncheckedCreateWithoutProjectsInput
    >;
  };

  export type SharedProjectCreateWithoutProjectInput = {
    id?: string;
    permissions?: string;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutSharedProjectsInput;
  };

  export type SharedProjectUncheckedCreateWithoutProjectInput = {
    id?: string;
    userId: string;
    permissions?: string;
    createdAt?: Date | string;
  };

  export type SharedProjectCreateOrConnectWithoutProjectInput = {
    where: SharedProjectWhereUniqueInput;
    create: XOR<
      SharedProjectCreateWithoutProjectInput,
      SharedProjectUncheckedCreateWithoutProjectInput
    >;
  };

  export type SharedProjectCreateManyProjectInputEnvelope = {
    data:
      | SharedProjectCreateManyProjectInput
      | SharedProjectCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type ProjectInvitationCreateWithoutProjectInput = {
    id?: string;
    email: string;
    token: string;
    expires: Date | string;
    createdAt?: Date | string;
    user?: UserCreateNestedOneWithoutProjectInvitationsInput;
  };

  export type ProjectInvitationUncheckedCreateWithoutProjectInput = {
    id?: string;
    email: string;
    userId?: string | null;
    token: string;
    expires: Date | string;
    createdAt?: Date | string;
  };

  export type ProjectInvitationCreateOrConnectWithoutProjectInput = {
    where: ProjectInvitationWhereUniqueInput;
    create: XOR<
      ProjectInvitationCreateWithoutProjectInput,
      ProjectInvitationUncheckedCreateWithoutProjectInput
    >;
  };

  export type ProjectInvitationCreateManyProjectInputEnvelope = {
    data:
      | ProjectInvitationCreateManyProjectInput
      | ProjectInvitationCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type ExportHistoryCreateWithoutProjectInput = {
    id?: string;
    format: string;
    createdAt?: Date | string;
    fileUrl?: string | null;
  };

  export type ExportHistoryUncheckedCreateWithoutProjectInput = {
    id?: string;
    format: string;
    createdAt?: Date | string;
    fileUrl?: string | null;
  };

  export type ExportHistoryCreateOrConnectWithoutProjectInput = {
    where: ExportHistoryWhereUniqueInput;
    create: XOR<
      ExportHistoryCreateWithoutProjectInput,
      ExportHistoryUncheckedCreateWithoutProjectInput
    >;
  };

  export type ExportHistoryCreateManyProjectInputEnvelope = {
    data:
      | ExportHistoryCreateManyProjectInput
      | ExportHistoryCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type WritingAnalyticsCreateWithoutProjectInput = {
    id?: string;
    wordCount?: number;
    characterCount?: number;
    sentenceCount?: number;
    paragraphCount?: number;
    readabilityScore?: number | null;
    topicAnalysis?: NullableJsonNullValueInput | InputJsonValue;
    lastUpdated?: Date | string;
  };

  export type WritingAnalyticsUncheckedCreateWithoutProjectInput = {
    id?: string;
    wordCount?: number;
    characterCount?: number;
    sentenceCount?: number;
    paragraphCount?: number;
    readabilityScore?: number | null;
    topicAnalysis?: NullableJsonNullValueInput | InputJsonValue;
    lastUpdated?: Date | string;
  };

  export type WritingAnalyticsCreateOrConnectWithoutProjectInput = {
    where: WritingAnalyticsWhereUniqueInput;
    create: XOR<
      WritingAnalyticsCreateWithoutProjectInput,
      WritingAnalyticsUncheckedCreateWithoutProjectInput
    >;
  };

  export type AiInteractionCreateWithoutProjectInput = {
    id?: string;
    prompt: string;
    response: string;
    tokensUsed: number;
    createdAt?: Date | string;
    interactionType: string;
  };

  export type AiInteractionUncheckedCreateWithoutProjectInput = {
    id?: string;
    prompt: string;
    response: string;
    tokensUsed: number;
    createdAt?: Date | string;
    interactionType: string;
  };

  export type AiInteractionCreateOrConnectWithoutProjectInput = {
    where: AiInteractionWhereUniqueInput;
    create: XOR<
      AiInteractionCreateWithoutProjectInput,
      AiInteractionUncheckedCreateWithoutProjectInput
    >;
  };

  export type AiInteractionCreateManyProjectInputEnvelope = {
    data:
      | AiInteractionCreateManyProjectInput
      | AiInteractionCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<
      UserUpdateWithoutProjectsInput,
      UserUncheckedUpdateWithoutProjectsInput
    >;
    create: XOR<
      UserCreateWithoutProjectsInput,
      UserUncheckedCreateWithoutProjectsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutProjectsInput,
      UserUncheckedUpdateWithoutProjectsInput
    >;
  };

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput;
    apiUsage?: ApiUsageUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUpdateManyWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    apiUsage?: ApiUsageUncheckedUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUncheckedUpdateManyWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUncheckedUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type SharedProjectUpsertWithWhereUniqueWithoutProjectInput = {
    where: SharedProjectWhereUniqueInput;
    update: XOR<
      SharedProjectUpdateWithoutProjectInput,
      SharedProjectUncheckedUpdateWithoutProjectInput
    >;
    create: XOR<
      SharedProjectCreateWithoutProjectInput,
      SharedProjectUncheckedCreateWithoutProjectInput
    >;
  };

  export type SharedProjectUpdateWithWhereUniqueWithoutProjectInput = {
    where: SharedProjectWhereUniqueInput;
    data: XOR<
      SharedProjectUpdateWithoutProjectInput,
      SharedProjectUncheckedUpdateWithoutProjectInput
    >;
  };

  export type SharedProjectUpdateManyWithWhereWithoutProjectInput = {
    where: SharedProjectScalarWhereInput;
    data: XOR<
      SharedProjectUpdateManyMutationInput,
      SharedProjectUncheckedUpdateManyWithoutProjectInput
    >;
  };

  export type ProjectInvitationUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectInvitationWhereUniqueInput;
    update: XOR<
      ProjectInvitationUpdateWithoutProjectInput,
      ProjectInvitationUncheckedUpdateWithoutProjectInput
    >;
    create: XOR<
      ProjectInvitationCreateWithoutProjectInput,
      ProjectInvitationUncheckedCreateWithoutProjectInput
    >;
  };

  export type ProjectInvitationUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectInvitationWhereUniqueInput;
    data: XOR<
      ProjectInvitationUpdateWithoutProjectInput,
      ProjectInvitationUncheckedUpdateWithoutProjectInput
    >;
  };

  export type ProjectInvitationUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectInvitationScalarWhereInput;
    data: XOR<
      ProjectInvitationUpdateManyMutationInput,
      ProjectInvitationUncheckedUpdateManyWithoutProjectInput
    >;
  };

  export type ExportHistoryUpsertWithWhereUniqueWithoutProjectInput = {
    where: ExportHistoryWhereUniqueInput;
    update: XOR<
      ExportHistoryUpdateWithoutProjectInput,
      ExportHistoryUncheckedUpdateWithoutProjectInput
    >;
    create: XOR<
      ExportHistoryCreateWithoutProjectInput,
      ExportHistoryUncheckedCreateWithoutProjectInput
    >;
  };

  export type ExportHistoryUpdateWithWhereUniqueWithoutProjectInput = {
    where: ExportHistoryWhereUniqueInput;
    data: XOR<
      ExportHistoryUpdateWithoutProjectInput,
      ExportHistoryUncheckedUpdateWithoutProjectInput
    >;
  };

  export type ExportHistoryUpdateManyWithWhereWithoutProjectInput = {
    where: ExportHistoryScalarWhereInput;
    data: XOR<
      ExportHistoryUpdateManyMutationInput,
      ExportHistoryUncheckedUpdateManyWithoutProjectInput
    >;
  };

  export type ExportHistoryScalarWhereInput = {
    AND?: ExportHistoryScalarWhereInput | ExportHistoryScalarWhereInput[];
    OR?: ExportHistoryScalarWhereInput[];
    NOT?: ExportHistoryScalarWhereInput | ExportHistoryScalarWhereInput[];
    id?: StringFilter<"ExportHistory"> | string;
    projectId?: StringFilter<"ExportHistory"> | string;
    format?: StringFilter<"ExportHistory"> | string;
    createdAt?: DateTimeFilter<"ExportHistory"> | Date | string;
    fileUrl?: StringNullableFilter<"ExportHistory"> | string | null;
  };

  export type WritingAnalyticsUpsertWithoutProjectInput = {
    update: XOR<
      WritingAnalyticsUpdateWithoutProjectInput,
      WritingAnalyticsUncheckedUpdateWithoutProjectInput
    >;
    create: XOR<
      WritingAnalyticsCreateWithoutProjectInput,
      WritingAnalyticsUncheckedCreateWithoutProjectInput
    >;
    where?: WritingAnalyticsWhereInput;
  };

  export type WritingAnalyticsUpdateToOneWithWhereWithoutProjectInput = {
    where?: WritingAnalyticsWhereInput;
    data: XOR<
      WritingAnalyticsUpdateWithoutProjectInput,
      WritingAnalyticsUncheckedUpdateWithoutProjectInput
    >;
  };

  export type WritingAnalyticsUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wordCount?: IntFieldUpdateOperationsInput | number;
    characterCount?: IntFieldUpdateOperationsInput | number;
    sentenceCount?: IntFieldUpdateOperationsInput | number;
    paragraphCount?: IntFieldUpdateOperationsInput | number;
    readabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null;
    topicAnalysis?: NullableJsonNullValueInput | InputJsonValue;
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type WritingAnalyticsUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wordCount?: IntFieldUpdateOperationsInput | number;
    characterCount?: IntFieldUpdateOperationsInput | number;
    sentenceCount?: IntFieldUpdateOperationsInput | number;
    paragraphCount?: IntFieldUpdateOperationsInput | number;
    readabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null;
    topicAnalysis?: NullableJsonNullValueInput | InputJsonValue;
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AiInteractionUpsertWithWhereUniqueWithoutProjectInput = {
    where: AiInteractionWhereUniqueInput;
    update: XOR<
      AiInteractionUpdateWithoutProjectInput,
      AiInteractionUncheckedUpdateWithoutProjectInput
    >;
    create: XOR<
      AiInteractionCreateWithoutProjectInput,
      AiInteractionUncheckedCreateWithoutProjectInput
    >;
  };

  export type AiInteractionUpdateWithWhereUniqueWithoutProjectInput = {
    where: AiInteractionWhereUniqueInput;
    data: XOR<
      AiInteractionUpdateWithoutProjectInput,
      AiInteractionUncheckedUpdateWithoutProjectInput
    >;
  };

  export type AiInteractionUpdateManyWithWhereWithoutProjectInput = {
    where: AiInteractionScalarWhereInput;
    data: XOR<
      AiInteractionUpdateManyMutationInput,
      AiInteractionUncheckedUpdateManyWithoutProjectInput
    >;
  };

  export type AiInteractionScalarWhereInput = {
    AND?: AiInteractionScalarWhereInput | AiInteractionScalarWhereInput[];
    OR?: AiInteractionScalarWhereInput[];
    NOT?: AiInteractionScalarWhereInput | AiInteractionScalarWhereInput[];
    id?: StringFilter<"AiInteraction"> | string;
    projectId?: StringFilter<"AiInteraction"> | string;
    prompt?: StringFilter<"AiInteraction"> | string;
    response?: StringFilter<"AiInteraction"> | string;
    tokensUsed?: IntFilter<"AiInteraction"> | number;
    createdAt?: DateTimeFilter<"AiInteraction"> | Date | string;
    interactionType?: StringFilter<"AiInteraction"> | string;
  };

  export type UserCreateWithoutPreferencesInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    apiUsage?: ApiUsageCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectCreateNestedManyWithoutUserInput;
    projectInvitations?: ProjectInvitationCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    apiUsage?: ApiUsageUncheckedCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectUncheckedCreateNestedManyWithoutUserInput;
    projectInvitations?: ProjectInvitationUncheckedCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPreferencesInput,
      UserUncheckedCreateWithoutPreferencesInput
    >;
  };

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<
      UserUpdateWithoutPreferencesInput,
      UserUncheckedUpdateWithoutPreferencesInput
    >;
    create: XOR<
      UserCreateWithoutPreferencesInput,
      UserUncheckedCreateWithoutPreferencesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPreferencesInput,
      UserUncheckedUpdateWithoutPreferencesInput
    >;
  };

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    apiUsage?: ApiUsageUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUpdateManyWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    apiUsage?: ApiUsageUncheckedUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUncheckedUpdateManyWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUncheckedUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type UserCreateWithoutApiUsageInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectCreateNestedManyWithoutUserInput;
    projectInvitations?: ProjectInvitationCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutApiUsageInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectUncheckedCreateNestedManyWithoutUserInput;
    projectInvitations?: ProjectInvitationUncheckedCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutApiUsageInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutApiUsageInput,
      UserUncheckedCreateWithoutApiUsageInput
    >;
  };

  export type UserUpsertWithoutApiUsageInput = {
    update: XOR<
      UserUpdateWithoutApiUsageInput,
      UserUncheckedUpdateWithoutApiUsageInput
    >;
    create: XOR<
      UserCreateWithoutApiUsageInput,
      UserUncheckedCreateWithoutApiUsageInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutApiUsageInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutApiUsageInput,
      UserUncheckedUpdateWithoutApiUsageInput
    >;
  };

  export type UserUpdateWithoutApiUsageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUpdateManyWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutApiUsageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUncheckedUpdateManyWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUncheckedUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type ProjectCreateWithoutSharedWithInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
    user: UserCreateNestedOneWithoutProjectsInput;
    invitations?: ProjectInvitationCreateNestedManyWithoutProjectInput;
    exportHistory?: ExportHistoryCreateNestedManyWithoutProjectInput;
    writingAnalytics?: WritingAnalyticsCreateNestedOneWithoutProjectInput;
    aiInteractions?: AiInteractionCreateNestedManyWithoutProjectInput;
  };

  export type ProjectUncheckedCreateWithoutSharedWithInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutProjectInput;
    exportHistory?: ExportHistoryUncheckedCreateNestedManyWithoutProjectInput;
    writingAnalytics?: WritingAnalyticsUncheckedCreateNestedOneWithoutProjectInput;
    aiInteractions?: AiInteractionUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type ProjectCreateOrConnectWithoutSharedWithInput = {
    where: ProjectWhereUniqueInput;
    create: XOR<
      ProjectCreateWithoutSharedWithInput,
      ProjectUncheckedCreateWithoutSharedWithInput
    >;
  };

  export type UserCreateWithoutSharedProjectsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput;
    apiUsage?: ApiUsageCreateNestedOneWithoutUserInput;
    projectInvitations?: ProjectInvitationCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutSharedProjectsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput;
    apiUsage?: ApiUsageUncheckedCreateNestedOneWithoutUserInput;
    projectInvitations?: ProjectInvitationUncheckedCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutSharedProjectsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSharedProjectsInput,
      UserUncheckedCreateWithoutSharedProjectsInput
    >;
  };

  export type ProjectUpsertWithoutSharedWithInput = {
    update: XOR<
      ProjectUpdateWithoutSharedWithInput,
      ProjectUncheckedUpdateWithoutSharedWithInput
    >;
    create: XOR<
      ProjectCreateWithoutSharedWithInput,
      ProjectUncheckedCreateWithoutSharedWithInput
    >;
    where?: ProjectWhereInput;
  };

  export type ProjectUpdateToOneWithWhereWithoutSharedWithInput = {
    where?: ProjectWhereInput;
    data: XOR<
      ProjectUpdateWithoutSharedWithInput,
      ProjectUncheckedUpdateWithoutSharedWithInput
    >;
  };

  export type ProjectUpdateWithoutSharedWithInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput;
    invitations?: ProjectInvitationUpdateManyWithoutProjectNestedInput;
    exportHistory?: ExportHistoryUpdateManyWithoutProjectNestedInput;
    writingAnalytics?: WritingAnalyticsUpdateOneWithoutProjectNestedInput;
    aiInteractions?: AiInteractionUpdateManyWithoutProjectNestedInput;
  };

  export type ProjectUncheckedUpdateWithoutSharedWithInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutProjectNestedInput;
    exportHistory?: ExportHistoryUncheckedUpdateManyWithoutProjectNestedInput;
    writingAnalytics?: WritingAnalyticsUncheckedUpdateOneWithoutProjectNestedInput;
    aiInteractions?: AiInteractionUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type UserUpsertWithoutSharedProjectsInput = {
    update: XOR<
      UserUpdateWithoutSharedProjectsInput,
      UserUncheckedUpdateWithoutSharedProjectsInput
    >;
    create: XOR<
      UserCreateWithoutSharedProjectsInput,
      UserUncheckedCreateWithoutSharedProjectsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSharedProjectsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSharedProjectsInput,
      UserUncheckedUpdateWithoutSharedProjectsInput
    >;
  };

  export type UserUpdateWithoutSharedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput;
    apiUsage?: ApiUsageUpdateOneWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSharedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    apiUsage?: ApiUsageUncheckedUpdateOneWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUncheckedUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type ProjectCreateWithoutInvitationsInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
    user: UserCreateNestedOneWithoutProjectsInput;
    sharedWith?: SharedProjectCreateNestedManyWithoutProjectInput;
    exportHistory?: ExportHistoryCreateNestedManyWithoutProjectInput;
    writingAnalytics?: WritingAnalyticsCreateNestedOneWithoutProjectInput;
    aiInteractions?: AiInteractionCreateNestedManyWithoutProjectInput;
  };

  export type ProjectUncheckedCreateWithoutInvitationsInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
    sharedWith?: SharedProjectUncheckedCreateNestedManyWithoutProjectInput;
    exportHistory?: ExportHistoryUncheckedCreateNestedManyWithoutProjectInput;
    writingAnalytics?: WritingAnalyticsUncheckedCreateNestedOneWithoutProjectInput;
    aiInteractions?: AiInteractionUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type ProjectCreateOrConnectWithoutInvitationsInput = {
    where: ProjectWhereUniqueInput;
    create: XOR<
      ProjectCreateWithoutInvitationsInput,
      ProjectUncheckedCreateWithoutInvitationsInput
    >;
  };

  export type UserCreateWithoutProjectInvitationsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput;
    apiUsage?: ApiUsageCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutProjectInvitationsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput;
    apiUsage?: ApiUsageUncheckedCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectUncheckedCreateNestedManyWithoutUserInput;
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutProjectInvitationsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutProjectInvitationsInput,
      UserUncheckedCreateWithoutProjectInvitationsInput
    >;
  };

  export type ProjectUpsertWithoutInvitationsInput = {
    update: XOR<
      ProjectUpdateWithoutInvitationsInput,
      ProjectUncheckedUpdateWithoutInvitationsInput
    >;
    create: XOR<
      ProjectCreateWithoutInvitationsInput,
      ProjectUncheckedCreateWithoutInvitationsInput
    >;
    where?: ProjectWhereInput;
  };

  export type ProjectUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: ProjectWhereInput;
    data: XOR<
      ProjectUpdateWithoutInvitationsInput,
      ProjectUncheckedUpdateWithoutInvitationsInput
    >;
  };

  export type ProjectUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput;
    sharedWith?: SharedProjectUpdateManyWithoutProjectNestedInput;
    exportHistory?: ExportHistoryUpdateManyWithoutProjectNestedInput;
    writingAnalytics?: WritingAnalyticsUpdateOneWithoutProjectNestedInput;
    aiInteractions?: AiInteractionUpdateManyWithoutProjectNestedInput;
  };

  export type ProjectUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    sharedWith?: SharedProjectUncheckedUpdateManyWithoutProjectNestedInput;
    exportHistory?: ExportHistoryUncheckedUpdateManyWithoutProjectNestedInput;
    writingAnalytics?: WritingAnalyticsUncheckedUpdateOneWithoutProjectNestedInput;
    aiInteractions?: AiInteractionUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type UserUpsertWithoutProjectInvitationsInput = {
    update: XOR<
      UserUpdateWithoutProjectInvitationsInput,
      UserUncheckedUpdateWithoutProjectInvitationsInput
    >;
    create: XOR<
      UserCreateWithoutProjectInvitationsInput,
      UserUncheckedCreateWithoutProjectInvitationsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutProjectInvitationsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutProjectInvitationsInput,
      UserUncheckedUpdateWithoutProjectInvitationsInput
    >;
  };

  export type UserUpdateWithoutProjectInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput;
    apiUsage?: ApiUsageUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutProjectInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    apiUsage?: ApiUsageUncheckedUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUncheckedUpdateManyWithoutUserNestedInput;
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type ProjectCreateWithoutExportHistoryInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
    user: UserCreateNestedOneWithoutProjectsInput;
    sharedWith?: SharedProjectCreateNestedManyWithoutProjectInput;
    invitations?: ProjectInvitationCreateNestedManyWithoutProjectInput;
    writingAnalytics?: WritingAnalyticsCreateNestedOneWithoutProjectInput;
    aiInteractions?: AiInteractionCreateNestedManyWithoutProjectInput;
  };

  export type ProjectUncheckedCreateWithoutExportHistoryInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
    sharedWith?: SharedProjectUncheckedCreateNestedManyWithoutProjectInput;
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutProjectInput;
    writingAnalytics?: WritingAnalyticsUncheckedCreateNestedOneWithoutProjectInput;
    aiInteractions?: AiInteractionUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type ProjectCreateOrConnectWithoutExportHistoryInput = {
    where: ProjectWhereUniqueInput;
    create: XOR<
      ProjectCreateWithoutExportHistoryInput,
      ProjectUncheckedCreateWithoutExportHistoryInput
    >;
  };

  export type ProjectUpsertWithoutExportHistoryInput = {
    update: XOR<
      ProjectUpdateWithoutExportHistoryInput,
      ProjectUncheckedUpdateWithoutExportHistoryInput
    >;
    create: XOR<
      ProjectCreateWithoutExportHistoryInput,
      ProjectUncheckedCreateWithoutExportHistoryInput
    >;
    where?: ProjectWhereInput;
  };

  export type ProjectUpdateToOneWithWhereWithoutExportHistoryInput = {
    where?: ProjectWhereInput;
    data: XOR<
      ProjectUpdateWithoutExportHistoryInput,
      ProjectUncheckedUpdateWithoutExportHistoryInput
    >;
  };

  export type ProjectUpdateWithoutExportHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput;
    sharedWith?: SharedProjectUpdateManyWithoutProjectNestedInput;
    invitations?: ProjectInvitationUpdateManyWithoutProjectNestedInput;
    writingAnalytics?: WritingAnalyticsUpdateOneWithoutProjectNestedInput;
    aiInteractions?: AiInteractionUpdateManyWithoutProjectNestedInput;
  };

  export type ProjectUncheckedUpdateWithoutExportHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    sharedWith?: SharedProjectUncheckedUpdateManyWithoutProjectNestedInput;
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutProjectNestedInput;
    writingAnalytics?: WritingAnalyticsUncheckedUpdateOneWithoutProjectNestedInput;
    aiInteractions?: AiInteractionUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type ProjectCreateWithoutWritingAnalyticsInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
    user: UserCreateNestedOneWithoutProjectsInput;
    sharedWith?: SharedProjectCreateNestedManyWithoutProjectInput;
    invitations?: ProjectInvitationCreateNestedManyWithoutProjectInput;
    exportHistory?: ExportHistoryCreateNestedManyWithoutProjectInput;
    aiInteractions?: AiInteractionCreateNestedManyWithoutProjectInput;
  };

  export type ProjectUncheckedCreateWithoutWritingAnalyticsInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
    sharedWith?: SharedProjectUncheckedCreateNestedManyWithoutProjectInput;
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutProjectInput;
    exportHistory?: ExportHistoryUncheckedCreateNestedManyWithoutProjectInput;
    aiInteractions?: AiInteractionUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type ProjectCreateOrConnectWithoutWritingAnalyticsInput = {
    where: ProjectWhereUniqueInput;
    create: XOR<
      ProjectCreateWithoutWritingAnalyticsInput,
      ProjectUncheckedCreateWithoutWritingAnalyticsInput
    >;
  };

  export type ProjectUpsertWithoutWritingAnalyticsInput = {
    update: XOR<
      ProjectUpdateWithoutWritingAnalyticsInput,
      ProjectUncheckedUpdateWithoutWritingAnalyticsInput
    >;
    create: XOR<
      ProjectCreateWithoutWritingAnalyticsInput,
      ProjectUncheckedCreateWithoutWritingAnalyticsInput
    >;
    where?: ProjectWhereInput;
  };

  export type ProjectUpdateToOneWithWhereWithoutWritingAnalyticsInput = {
    where?: ProjectWhereInput;
    data: XOR<
      ProjectUpdateWithoutWritingAnalyticsInput,
      ProjectUncheckedUpdateWithoutWritingAnalyticsInput
    >;
  };

  export type ProjectUpdateWithoutWritingAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput;
    sharedWith?: SharedProjectUpdateManyWithoutProjectNestedInput;
    invitations?: ProjectInvitationUpdateManyWithoutProjectNestedInput;
    exportHistory?: ExportHistoryUpdateManyWithoutProjectNestedInput;
    aiInteractions?: AiInteractionUpdateManyWithoutProjectNestedInput;
  };

  export type ProjectUncheckedUpdateWithoutWritingAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    sharedWith?: SharedProjectUncheckedUpdateManyWithoutProjectNestedInput;
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutProjectNestedInput;
    exportHistory?: ExportHistoryUncheckedUpdateManyWithoutProjectNestedInput;
    aiInteractions?: AiInteractionUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type ProjectCreateWithoutAiInteractionsInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
    user: UserCreateNestedOneWithoutProjectsInput;
    sharedWith?: SharedProjectCreateNestedManyWithoutProjectInput;
    invitations?: ProjectInvitationCreateNestedManyWithoutProjectInput;
    exportHistory?: ExportHistoryCreateNestedManyWithoutProjectInput;
    writingAnalytics?: WritingAnalyticsCreateNestedOneWithoutProjectInput;
  };

  export type ProjectUncheckedCreateWithoutAiInteractionsInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
    sharedWith?: SharedProjectUncheckedCreateNestedManyWithoutProjectInput;
    invitations?: ProjectInvitationUncheckedCreateNestedManyWithoutProjectInput;
    exportHistory?: ExportHistoryUncheckedCreateNestedManyWithoutProjectInput;
    writingAnalytics?: WritingAnalyticsUncheckedCreateNestedOneWithoutProjectInput;
  };

  export type ProjectCreateOrConnectWithoutAiInteractionsInput = {
    where: ProjectWhereUniqueInput;
    create: XOR<
      ProjectCreateWithoutAiInteractionsInput,
      ProjectUncheckedCreateWithoutAiInteractionsInput
    >;
  };

  export type ProjectUpsertWithoutAiInteractionsInput = {
    update: XOR<
      ProjectUpdateWithoutAiInteractionsInput,
      ProjectUncheckedUpdateWithoutAiInteractionsInput
    >;
    create: XOR<
      ProjectCreateWithoutAiInteractionsInput,
      ProjectUncheckedCreateWithoutAiInteractionsInput
    >;
    where?: ProjectWhereInput;
  };

  export type ProjectUpdateToOneWithWhereWithoutAiInteractionsInput = {
    where?: ProjectWhereInput;
    data: XOR<
      ProjectUpdateWithoutAiInteractionsInput,
      ProjectUncheckedUpdateWithoutAiInteractionsInput
    >;
  };

  export type ProjectUpdateWithoutAiInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput;
    sharedWith?: SharedProjectUpdateManyWithoutProjectNestedInput;
    invitations?: ProjectInvitationUpdateManyWithoutProjectNestedInput;
    exportHistory?: ExportHistoryUpdateManyWithoutProjectNestedInput;
    writingAnalytics?: WritingAnalyticsUpdateOneWithoutProjectNestedInput;
  };

  export type ProjectUncheckedUpdateWithoutAiInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    sharedWith?: SharedProjectUncheckedUpdateManyWithoutProjectNestedInput;
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutProjectNestedInput;
    exportHistory?: ExportHistoryUncheckedUpdateManyWithoutProjectNestedInput;
    writingAnalytics?: WritingAnalyticsUncheckedUpdateOneWithoutProjectNestedInput;
  };

  export type UserCreateWithoutSubscriptionInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput;
    apiUsage?: ApiUsageCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectCreateNestedManyWithoutUserInput;
    projectInvitations?: ProjectInvitationCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    hashedPassword?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stripeCustomerId?: string | null;
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput;
    apiUsage?: ApiUsageUncheckedCreateNestedOneWithoutUserInput;
    sharedProjects?: SharedProjectUncheckedCreateNestedManyWithoutUserInput;
    projectInvitations?: ProjectInvitationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSubscriptionInput,
      UserUncheckedCreateWithoutSubscriptionInput
    >;
  };

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<
      UserUpdateWithoutSubscriptionInput,
      UserUncheckedUpdateWithoutSubscriptionInput
    >;
    create: XOR<
      UserCreateWithoutSubscriptionInput,
      UserUncheckedCreateWithoutSubscriptionInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSubscriptionInput,
      UserUncheckedUpdateWithoutSubscriptionInput
    >;
  };

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput;
    apiUsage?: ApiUsageUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUpdateManyWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null;
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput;
    apiUsage?: ApiUsageUncheckedUpdateOneWithoutUserNestedInput;
    sharedProjects?: SharedProjectUncheckedUpdateManyWithoutUserNestedInput;
    projectInvitations?: ProjectInvitationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ProjectCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    isPublic?: boolean;
  };

  export type AccountCreateManyUserInput = {
    id?: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
  };

  export type SessionCreateManyUserInput = {
    id?: string;
    sessionToken: string;
    expires: Date | string;
  };

  export type SharedProjectCreateManyUserInput = {
    id?: string;
    projectId: string;
    permissions?: string;
    createdAt?: Date | string;
  };

  export type ProjectInvitationCreateManyUserInput = {
    id?: string;
    projectId: string;
    email: string;
    token: string;
    expires: Date | string;
    createdAt?: Date | string;
  };

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    sharedWith?: SharedProjectUpdateManyWithoutProjectNestedInput;
    invitations?: ProjectInvitationUpdateManyWithoutProjectNestedInput;
    exportHistory?: ExportHistoryUpdateManyWithoutProjectNestedInput;
    writingAnalytics?: WritingAnalyticsUpdateOneWithoutProjectNestedInput;
    aiInteractions?: AiInteractionUpdateManyWithoutProjectNestedInput;
  };

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
    sharedWith?: SharedProjectUncheckedUpdateManyWithoutProjectNestedInput;
    invitations?: ProjectInvitationUncheckedUpdateManyWithoutProjectNestedInput;
    exportHistory?: ExportHistoryUncheckedUpdateManyWithoutProjectNestedInput;
    writingAnalytics?: WritingAnalyticsUncheckedUpdateOneWithoutProjectNestedInput;
    aiInteractions?: AiInteractionUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    isPublic?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sessionToken?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sessionToken?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sessionToken?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SharedProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    permissions?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: ProjectUpdateOneRequiredWithoutSharedWithNestedInput;
  };

  export type SharedProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    permissions?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SharedProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    permissions?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProjectInvitationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: ProjectUpdateOneRequiredWithoutInvitationsNestedInput;
  };

  export type ProjectInvitationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProjectInvitationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    projectId?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SharedProjectCreateManyProjectInput = {
    id?: string;
    userId: string;
    permissions?: string;
    createdAt?: Date | string;
  };

  export type ProjectInvitationCreateManyProjectInput = {
    id?: string;
    email: string;
    userId?: string | null;
    token: string;
    expires: Date | string;
    createdAt?: Date | string;
  };

  export type ExportHistoryCreateManyProjectInput = {
    id?: string;
    format: string;
    createdAt?: Date | string;
    fileUrl?: string | null;
  };

  export type AiInteractionCreateManyProjectInput = {
    id?: string;
    prompt: string;
    response: string;
    tokensUsed: number;
    createdAt?: Date | string;
    interactionType: string;
  };

  export type SharedProjectUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    permissions?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSharedProjectsNestedInput;
  };

  export type SharedProjectUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    permissions?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SharedProjectUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    permissions?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProjectInvitationUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutProjectInvitationsNestedInput;
  };

  export type ProjectInvitationUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    token?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProjectInvitationUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    userId?: NullableStringFieldUpdateOperationsInput | string | null;
    token?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExportHistoryUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    format?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ExportHistoryUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    format?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ExportHistoryUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    format?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AiInteractionUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: StringFieldUpdateOperationsInput | string;
    tokensUsed?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    interactionType?: StringFieldUpdateOperationsInput | string;
  };

  export type AiInteractionUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: StringFieldUpdateOperationsInput | string;
    tokensUsed?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    interactionType?: StringFieldUpdateOperationsInput | string;
  };

  export type AiInteractionUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: StringFieldUpdateOperationsInput | string;
    tokensUsed?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    interactionType?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
