import * as runtimeType from 'io-ts'
import {
  PathReporter,
} from 'io-ts/lib/PathReporter'

export default validateType

/**
 * Wrap io-ts's interface and throw a single error if the type of the thingToValidate doesn't match the validator type.
 */
function validateType<T extends runtimeType.Any> (runtimeValidator: T, thingToValidate: any): asserts thingToValidate is runtimeType.TypeOf<T> {
  const messages = PathReporter.report(runtimeValidator.decode(thingToValidate))

  if (messages.length > 0 && messages[0] !== `No errors!`) {
    /**
     * We assume any other messages are errors. We return only the first error because:
     * - it's easier to read, because the `PathReporter` returns all of the errors it can find and the output is not the easiest to digest
     * - you should still get all of the errors as you incrementally fix the type
     */
    throw new Error(messages[0])
  }
}
