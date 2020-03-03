# Remember to Track Review Time!

[comment]: # (If this closes something, say it here. For example, "Closes #10")

[comment]: # (What's the purpose of this PR? Is there anything in particular you'd like reviewers to know?)

[comment]: # (How can reviewers verify that the PR accomplishes its objective, if necessary?)

## Checklist
- [ ] I've reviewed the entire diff
- [ ] all changes are essential to what we're trying to achieve
- [ ] relevant tests added
  - [ ] they're safe to run in parallel with other tests
  - [ ] they run quickly
- [ ] all tests passing
- [ ] relevant metrics added
- [ ] I've set up a reminder to set up dashboards and alerts (as needed) in Datadog once metrics start recording data
- [ ] no style issues
- [ ] ['Why' comments](https://docs.google.com/document/d/1kHDmQ3ofL8rDdmbp08BvxOPSWJaY8BJmyXIvXQKNSNQ/edit#) have been added
- [ ] documentation added/updated as necessary (using [tags](https://docs.google.com/document/d/1OFrkFQHIA7ucvHyE5EqAnkPuWwGwQ04CYFD0VpF7Xhs/edit) on Drive should make this easier)
- [ ] If this change is for a library, usability for current use cases has been considered
* If there are migrations
  - [ ] plain strings or raw SQL are used where possible, so that the migration will work regardless of code versions or the environment
  * If data is modified or deleted
    - [ ] permanent data modification and deletion will happen at least a week after we're sure these migrations didn't break anything
    - [ ] I've created the followup PR with the migration to modify or delete data. Here's the link: **FILL THIS IN**
    - [ ] I've set up a reminder to deploy the followup PR in at least one week
  - [ ] tested against a copy of the production database
    - [ ] schemas change correctly during migration
    - [ ] data changes correctly during migration
    - [ ] schemas change correctly during rollback
    - [ ] data changes correctly during rollback
  - [ ] automated tests pass when run on the post-migration database
