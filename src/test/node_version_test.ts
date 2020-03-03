import test from 'parallel-test'
import * as assert from 'assert'
import * as semver from 'semver'
import * as readPackageJson from 'read-pkg'

test(`there is a node version in package.json`, async () => {
  const packageJson = await readPackageJson()

  assert.ok(packageJson.engines)

  assert.ok(packageJson.engines!.node)

  const parsedSemver = semver.coerce(packageJson.engines!.node as string)

  assert(parsedSemver, `Found a valid node version in package.json`)

  assert.ok(semver.valid(parsedSemver as Exclude< ReturnType<typeof semver.coerce>, null>))
})

test(`current node version is allowed by package.json node version`, async () => {
  const packageJson = await readPackageJson()

  assert.ok(semver.clean(process.version), `Found a valid process.version`)

  assert.ok(semver.satisfies(
    semver.clean(process.version) as string,
    packageJson.engines!.node,
  ))
})
