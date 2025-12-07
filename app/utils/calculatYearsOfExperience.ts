import { ExperienceP } from "@/constants/experience/experience.properties"

// Calculate total years of experience excluding gaps
const calculateYearsOfExperience = ({
    experiences,
}: {
    experiences: ExperienceP[]
}) => {
    // Create an array of all date ranges
    const dateRanges = experiences.map(exp => ({
        start: exp.start,
        end: typeof exp.finish === 'string' ? new Date() : exp.finish
    }))

    // Sort by start date
    dateRanges.sort((a, b) => a.start.getTime() - b.start.getTime())

    // Merge overlapping ranges
    const mergedRanges: { start: Date; end: Date }[] = []
    
    for (const range of dateRanges) {
        if (mergedRanges.length === 0) {
            mergedRanges.push({ ...range })
        } else {
            const lastRange = mergedRanges[mergedRanges.length - 1]
            
            // If current range overlaps or touches the last range, merge them
            if (range.start <= lastRange.end) {
                lastRange.end = new Date(Math.max(lastRange.end.getTime(), range.end.getTime()))
            } else {
                // No overlap, add as new range
                mergedRanges.push({ ...range })
            }
        }
    }

    // Calculate total time in milliseconds
    const totalMilliseconds = mergedRanges.reduce((total, range) => {
        return total + (range.end.getTime() - range.start.getTime())
    }, 0)

    // Convert to years (approximate, using 365.25 days per year)
    const totalYears = totalMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
    
    return Math.floor(totalYears)
}

export default calculateYearsOfExperience