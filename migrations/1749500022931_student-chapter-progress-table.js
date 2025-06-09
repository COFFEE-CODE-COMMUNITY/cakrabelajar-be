/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
    pgm.createTable('student_chapter_progress', {
        id: { type: 'VARCHAR(255)', notNull: true, primaryKey: true},
        enrollment_id : { type: 'VARCHAR(255)', notNull: true, references: 'student_lesson_enrollments', onDelete: 'CASCADE'},
        chapter_id : { type: 'VARCHAR(255)', notNull: true, references: 'chapters', onDelete: 'CASCADE'},
        started_at : { type: 'TIMESTAMPTZ', notNull: true, default: pgm.func('current_timestamp')},
        completed_at : { type: 'TIMESTAMPTZ', default: pgm.func('current_timestamp')}
    })

    pgm.createConstraint('student_chapter_progress', 'fk_student_chapter_progress_enrollment_id', {
        foreignKeys: {
            columns : 'enrollment_id',
            references : 'student_lesson_enrollments',
            onDelete: 'CASCADE'
        }
    })

    pgm.createConstraint('student_chapter_progress', 'fk_student_chapter_progress_chapter_id', {
        foreignKeys: {
            columns: 'chapter_id',
            references: 'chapters(id)',
            onDelete: 'CASCADE'
        }
    })
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.dropTable('student_chapter_progress')
};
